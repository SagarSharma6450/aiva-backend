package com.aiva.AIVA_Project.service;

import com.aiva.AIVA_Project.dto.*;
import com.aiva.AIVA_Project.entity.interviewQuestions;
import com.aiva.AIVA_Project.entity.interviewSession;
import com.aiva.AIVA_Project.repository.interviewQuestionRepository;
import com.aiva.AIVA_Project.repository.interviewSessionRepository;
import com.aiva.AIVA_Project.repository.userRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class interviewService {

    private static final String[] ROLE_LABELS = {"java", "Java Developer", "python", "Python Developer",
            "frontend", "Frontend Developer", "data-science", "Data Science",
            "system-design", "System Design", "behavioral", "HR / Behavioral"};

    private final interviewSessionRepository sessionRepository;
    private final interviewQuestionRepository questionRepository;
    private final userRepository userRepository;
    private final groqService groqService;

    public interviewService(interviewSessionRepository sessionRepository,
                            interviewQuestionRepository questionRepository,
                            userRepository userRepository,
                            groqService groqService) {
        this.sessionRepository = sessionRepository;
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
        this.groqService = groqService;
    }

    private String getDomainTopics(String roleTitle) {
    return switch (roleTitle) {
        case "Java Developer" ->
            "Core Java (OOP, classes, interfaces, inheritance, polymorphism), " +
            "Java Collections (List, Set, Map, Queue), Exception Handling, " +
            "Multithreading & Concurrency basics, Java 8 features (Streams, Lambda, Optional), " +
            "String handling, Generics, Spring Boot basics (REST APIs, annotations, dependency injection), " +
            "JPA/Hibernate basics, Maven/Gradle, JUnit testing";
        case "Python Developer" ->
            "Python syntax & data types, Lists/Tuples/Dicts/Sets, " +
            "List comprehensions, Functions & decorators, Lambda & map/filter/reduce, " +
            "File I/O, Exception handling, OOP in Python (classes, inheritance), " +
            "Modules & packages, Virtual environments, pip, " +
            "Django/Flask basics (routes, views, models, templates), " +
            "REST API development in Python, pytest basics";
        case "Frontend Developer" ->
            "HTML5 (semantic tags, forms, accessibility), " +
            "CSS3 (flexbox, grid, box model, specificity, responsive design, media queries), " +
            "JavaScript (ES6+, var/let/const, arrow functions, promises, async/await, closures, DOM manipulation), " +
            "React (components, props, state, hooks: useState/useEffect/useRef, JSX, event handling), " +
            "React Router, fetch/axios for API calls, " +
            "Local storage, Browser DevTools, npm basics, Git basics";
        case "Data Science" ->
            "Python for data science (NumPy, Pandas basics), " +
            "Data cleaning & preprocessing, Exploratory Data Analysis (EDA), " +
            "Matplotlib/Seaborn for visualization, " +
            "Statistics basics (mean, median, std deviation, correlation), " +
            "Supervised learning (linear regression, logistic regression, decision trees), " +
            "Unsupervised learning (K-Means clustering basics), " +
            "scikit-learn (train/test split, model evaluation, accuracy/precision/recall), " +
            "Overfitting & underfitting, Feature engineering basics, SQL for data analysis";
        case "System Design" ->
            "Client-server architecture, REST vs GraphQL, " +
            "Horizontal vs vertical scaling, Load balancers, " +
            "Caching (Redis, CDN, browser cache), " +
            "SQL vs NoSQL databases, Indexing basics, " +
            "Message queues (Kafka, RabbitMQ basics), " +
            "Microservices vs monolith, API rate limiting, " +
            "CAP theorem basics, Database sharding & replication, " +
            "Stateless vs stateful services, Authentication (JWT, OAuth basics)";
        case "HR / Behavioral" ->
            "Tell me about yourself, Strengths and weaknesses, " +
            "Teamwork and collaboration (STAR method), " +
            "Handling conflict with a colleague, " +
            "Time management and meeting deadlines, " +
            "A challenge you overcame, Leadership experience, " +
            "Why do you want this job/company, " +
            "Where do you see yourself in 5 years, " +
            "Handling failure or criticism, Working under pressure, " +
            "Career goals and motivation";
        default ->
            roleTitle + " core concepts, tools, frameworks, best practices, " +
            "common interview topics for " + roleTitle + " at beginner and intermediate level";
    };
}

    private String getRoleTitle(String typeId) {
        for (int i = 0; i < ROLE_LABELS.length; i += 2) {
            if (ROLE_LABELS[i].equals(typeId)) return ROLE_LABELS[i + 1];
        }
        return typeId;
    }

    public startSessionResponse startSession(String email, String typeId, startSessionRequest request) {
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        String roleTitle = getRoleTitle(typeId);

        var session = interviewSession.builder()
                .userId(user.getId())
                .role(roleTitle)
                .durationMinutes(request.getDurationMinutes())
                .questionCount(request.getQuestionCount())
                .startedAt(LocalDateTime.now())
                .build();

        session = sessionRepository.save(session);
        return startSessionResponse.builder()
                .sessionId(session.getId())
                .role(roleTitle)
                .durationMinutes(session.getDurationMinutes())
                .questionCount(session.getQuestionCount())
                .build();
    }

    public questionResponse getNextQuestion(Long sessionId, String email) {
        var session = validateSession(sessionId, email);
        List<interviewQuestions> existing = questionRepository.findBySessionId(sessionId);

        // If there's already an unanswered question, return it instead of creating a duplicate
        var unanswered = existing.stream()
                .filter(q -> q.getUserAnswer() == null)
                .findFirst();
        if (unanswered.isPresent()) {
            var q = unanswered.get();
            int answeredCount = (int) existing.stream().filter(x -> x.getUserAnswer() != null).count();
            return questionResponse.builder()
                    .questionId(q.getId())
                    .questionText(q.getQuestionText())
                    .currentQuestion(answeredCount + 1)
                    .totalQuestions(session.getQuestionCount())
                    .hasMore(answeredCount + 1 < session.getQuestionCount())
                    .build();
        }

        int currentIndex = existing.size();

        if (currentIndex >= session.getQuestionCount()) {
            completeSession(session);
            return null; // Interview complete
        }

       String roleTitle = session.getRole();

// Build list of already-asked questions to avoid repetition
String alreadyAsked = existing.isEmpty() ? "None" :
        java.util.stream.IntStream.range(0, existing.size())
                .mapToObj(i -> (i + 1) + ". " + existing.get(i).getQuestionText())
                .collect(java.util.stream.Collectors.joining("\n"));

// Domain-specific topic banks for focused questioning
String domainTopics = getDomainTopics(roleTitle);

String systemPrompt = "You are a strict technical interviewer conducting a " + roleTitle + " interview. " +
        "Your ONLY job is to ask questions that are DIRECTLY and SPECIFICALLY about " + roleTitle + " technologies, tools, concepts, and skills. " +
        "STRICT RULES:\n" +
        "1. ONLY ask questions about: " + domainTopics + "\n" +
        "2. Questions must be at BASIC or INTERMEDIATE level — no advanced/expert topics.\n" +
        "3. NEVER ask generic CS theory (no OS, Networking, DBMS theory) unless it directly applies to " + roleTitle + ".\n" +
        "4. NEVER repeat or paraphrase any previously asked question.\n" +
        "5. Each question must cover a DIFFERENT topic/concept from the previous ones.\n" +
        "6. Return ONLY the question text — no numbering, no preamble, no explanation.";

String userPrompt = "Generate question " + (currentIndex + 1) + " of " + session.getQuestionCount() + " for a " + roleTitle + " interview.\n\n" +
        "Questions already asked (DO NOT repeat these topics):\n" + alreadyAsked + "\n\n" +
        "Pick a fresh topic from: " + domainTopics + ". Ask a basic or intermediate level question on it.";

        String questionText = groqService.chat(systemPrompt, userPrompt);

        var question = interviewQuestions.builder()
                .sessionId(sessionId)
                .questionText(questionText)
                .build();
        question = questionRepository.save(question);

        return questionResponse.builder()
                .questionId(question.getId())
                .questionText(question.getQuestionText())
                .currentQuestion(currentIndex + 1)
                .totalQuestions(session.getQuestionCount())
                .hasMore(currentIndex + 1 < session.getQuestionCount())
                .build();
    }

    public evaluateAnswerResponse evaluateAnswer(Long sessionId, Long questionId, String answer, String email) {
        var session = validateSession(sessionId, email);
        var question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        if (!question.getSessionId().equals(sessionId)) {
            throw new RuntimeException("Question does not belong to this session");
        }

        String systemPrompt = "You are an expert interviewer. Evaluate the candidate's answer. " +
                "Be concise (2-4 sentences). Mention what was good and what could improve. Stay professional.";
        String userPrompt = "Question: " + question.getQuestionText() + "\n\nCandidate's answer: " + answer + "\n\nProvide brief evaluation:";

        String evaluation = groqService.chat(systemPrompt, userPrompt);

        question.setUserAnswer(answer);
        question.setAiEvaluation(evaluation);
        questionRepository.save(question);

        int answered = (int) questionRepository.findBySessionId(sessionId).stream()
                .filter(q -> q.getUserAnswer() != null).count();

        if (answered >= session.getQuestionCount()) {
            completeSession(session);
            return evaluateAnswerResponse.builder()
                    .evaluation(evaluation)
                    .hasNextQuestion(false)
                    .nextQuestion(null)
                    .build();
        }

        questionResponse next = getNextQuestion(sessionId, email);
        return evaluateAnswerResponse.builder()
                .evaluation(evaluation)
                .hasNextQuestion(next != null)
                .nextQuestion(next)
                .build();
    }

    public List<questionResponse> getAllQuestions(Long sessionId, String email) {
        var session = validateSession(sessionId, email);
        List<interviewQuestions> questions = questionRepository.findBySessionId(sessionId);
        int total = session.getQuestionCount();
        List<questionResponse> result = new java.util.ArrayList<>();
        int idx = 0;
        for (var q : questions) {
            idx++;
            result.add(questionResponse.builder()
                    .questionId(q.getId())
                    .questionText(q.getQuestionText())
                    .currentQuestion(idx)
                    .totalQuestions(total)
                    .hasMore(idx < total)
                    .userAnswer(q.getUserAnswer())
                    .build());
        }
        return result;
    }

    public evaluateAnswerResponse submitAnswer(Long sessionId, Long questionId, String answer, String email) {
        var session = validateSession(sessionId, email);
        var question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        if (!question.getSessionId().equals(sessionId)) {
            throw new RuntimeException("Question does not belong to this session");
        }

        question.setUserAnswer(answer);
        questionRepository.save(question);

        int answered = (int) questionRepository.findBySessionId(sessionId).stream()
                .filter(q -> q.getUserAnswer() != null).count();

        if (answered >= session.getQuestionCount()) {
            return evaluateAnswerResponse.builder()
                    .evaluation(null)
                    .hasNextQuestion(false)
                    .nextQuestion(null)
                    .build();
        }

        questionResponse next = getNextQuestion(sessionId, email);
        return evaluateAnswerResponse.builder()
                .evaluation(null)
                .hasNextQuestion(next != null)
                .nextQuestion(next)
                .build();
    }

    public interviewResultResponse getSessionResult(Long sessionId, String email) {
        var session = validateSession(sessionId, email);
        List<interviewQuestions> allQuestions = questionRepository.findBySessionId(sessionId);

        // Only consider answered questions for evaluation
        List<interviewQuestions> questions = allQuestions.stream()
                .filter(q -> q.getUserAnswer() != null)
                .toList();

        if (questions.size() < session.getQuestionCount()) {
            throw new RuntimeException("Interview not yet complete");
        }
        // If no questions were answered at all, return zero score immediately
if (questions.isEmpty()) {
    session.setScore(0.0);
    session.setCompletedAt(LocalDateTime.now());
    session.setFeedbackSummary("Score: 0.0/10");
    sessionRepository.save(session);

    return interviewResultResponse.builder()
            .score(0.0)
            .strengths("No answers were provided.")
            .weaknesses("You did not attempt any questions in this session.")
            .improvements("Attempt all questions and provide detailed answers to get a proper evaluation.")
            .interviewTips("Make sure to answer every question, even if you are unsure. Partial answers are better than no answers.")
            .build();
}
        // Filter out placeholder/empty answers (auto-submitted blanks)
List<interviewQuestions> realAnswered = questions.stream()
        .filter(q -> q.getUserAnswer() != null
                && !q.getUserAnswer().trim().isEmpty()
                && !q.getUserAnswer().trim().equals("-"))
        .toList();

// If all answers were blank/placeholder, return zero score
if (realAnswered.isEmpty()) {
    session.setScore(0.0);
    session.setCompletedAt(LocalDateTime.now());
    session.setFeedbackSummary("Score: 0.0/10");
    sessionRepository.save(session);

    return interviewResultResponse.builder()
            .score(0.0)
            .strengths("No answers were provided.")
            .weaknesses("You did not attempt any questions in this session.")
            .improvements("Attempt all questions and provide detailed answers to get a proper evaluation.")
            .interviewTips("Make sure to answer every question, even if you are unsure. Partial answers are better than no answers.")
            .build();
}

StringBuilder qaPairs = new StringBuilder();
for (int i = 0; i < realAnswered.size(); i++) {
    var q = realAnswered.get(i);
    qaPairs.append("Q").append(i + 1).append(": ").append(q.getQuestionText()).append("\n");
    qaPairs.append("A").append(i + 1).append(": ").append(q.getUserAnswer()).append("\n\n");
}

        String systemPrompt = "You are an expert interview evaluator. Evaluate the candidate's overall interview performance. " +
        "IMPORTANT: Keep your ENTIRE response under 500 characters. Be very brief and concise. " +
        "CRITICAL SCORING RULE: If answers are very poor, incomplete, or wrong, score must be 0-3. " +
        "Do NOT give scores above 5 unless answers show clear understanding. Be strict and honest. " +
        "Use EXACTLY this format (one line each, no extra text):\n" +
        "SCORE: <number 0-10>\n" +
        "STRENGTHS: <1 short sentence>\n" +
        "WEAKNESSES: <1 short sentence>\n" +
        "IMPROVEMENTS: <1 short sentence>\n" +
        "INTERVIEW_TIPS: <1 short sentence>";

String userPrompt = "Role: " + session.getRole() + "\n\n" +
        "Total questions in session: " + session.getQuestionCount() + "\n" +
        "Questions actually answered: " + realAnswered.size() + "\n\n" +
        qaPairs +
        "Give strict honest evaluation. If few questions answered or answers are weak, reflect that in a low score. " +
        "Keep total response under 500 characters.";
        
        String result = groqService.chat(systemPrompt, userPrompt);

        double score = 5.0;
        String strengths = "";
        String weaknesses = "";
        String improvements = "";
        String interviewTips = "";

        for (String line : result.split("\n")) {
            line = line.trim();
            if (line.startsWith("SCORE:")) {
                try {
                    String scoreStr = line.substring(6).trim().replaceAll("[^0-9.]", "");
                    score = Double.parseDouble(scoreStr);
                    if (score > 10) score = 10;
                    if (score < 0) score = 0;
                } catch (NumberFormatException ignored) {}
            } else if (line.startsWith("STRENGTHS:")) {
                strengths = line.substring(10).trim();
            } else if (line.startsWith("WEAKNESSES:")) {
                weaknesses = line.substring(11).trim();
            } else if (line.startsWith("IMPROVEMENTS:")) {
                improvements = line.substring(13).trim();
            } else if (line.startsWith("INTERVIEW_TIPS:")) {
                interviewTips = line.substring(15).trim();
            }
        }

        // Save evaluation to each question
        for (var q : questions) {
            if (q.getAiEvaluation() == null) {
                q.setAiEvaluation("Evaluated in final report");
                questionRepository.save(q);
            }
        }

        // Build a short summary to store in DB
        String shortSummary = "Score: " + score + "/10";
        session.setScore(score);
        session.setCompletedAt(LocalDateTime.now());
        session.setFeedbackSummary(shortSummary);
        sessionRepository.save(session);

        return interviewResultResponse.builder()
                .score(score)
                .strengths(strengths)
                .weaknesses(weaknesses)
                .improvements(improvements)
                .interviewTips(interviewTips)
                .build();
    }

    public interviewHistoryResponse getHistory(String email) {
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        List<interviewSession> allSessions = sessionRepository.findByUserIdOrderByStartedAtDesc(user.getId());

        // Only include sessions that have a score (i.e., completed with evaluation)
        List<interviewSession> completed = allSessions.stream()
                .filter(s -> s.getScore() != null && s.getCompletedAt() != null)
                .toList();

        int total = completed.size();
        double avgScore = completed.stream().mapToDouble(interviewSession::getScore).average().orElse(0.0);
        double bestScore = completed.stream().mapToDouble(interviewSession::getScore).max().orElse(0.0);

        // Round to 1 decimal place
        avgScore = Math.round(avgScore * 10.0) / 10.0;
        bestScore = Math.round(bestScore * 10.0) / 10.0;

        // Show only recent 10 sessions in the list, but stats are calculated from ALL sessions
List<interviewHistoryResponse.HistoryItem> items = completed.stream()
        .limit(10)
        .map(s -> interviewHistoryResponse.HistoryItem.builder()
                .sessionId(s.getId())
                .role(s.getRole())
                .score(s.getScore())
                .questionCount(s.getQuestionCount())
                .startedAt(s.getStartedAt())
                .completedAt(s.getCompletedAt())
                .build())
        .toList();

return interviewHistoryResponse.builder()
        .totalInterviews(total)      // still shows real total count of ALL sessions
        .averageScore(avgScore)      // average across ALL sessions
        .bestScore(bestScore)        // best score across ALL sessions
        .sessions(items)             // only recent 10 displayed
        .build();
    }
    private interviewSession validateSession(Long sessionId, String email) {
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        var session = sessionRepository.findById(sessionId).orElseThrow(() -> new RuntimeException("Session not found"));
        if (!session.getUserId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }
        return session;
    }

    private void completeSession(interviewSession session) {
        var questions = questionRepository.findBySessionId(session.getId());
        if (questions.isEmpty()) return;

        String summary = "Interview completed. " + questions.size() + " questions answered.";
        session.setCompletedAt(LocalDateTime.now());
        session.setFeedbackSummary(summary);
        sessionRepository.save(session);
    }
}
