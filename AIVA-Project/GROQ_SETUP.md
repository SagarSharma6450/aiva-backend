# Groq API Setup for AIVA

## Where to Add Your API Key and Model

Edit **`src/main/resources/application.properties`** and set:

```
groq.api.key=YOUR_GROQ_API_KEY_HERE
groq.model=llama-3.1-8b-instant
```

## Get Your API Key

1. Go to [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Copy it and paste into `application.properties`

## Available Models (Groq)

Common models you can use:

- `llama-3.1-8b-instant` – Fast, good for interviews
- `llama-3.3-70b-versatile` – More capable, slightly slower
- `mixtral-8x7b-32768` – Good balance

Check [Groq Models Docs](https://console.groq.com/docs/models) for the latest list.

## Security (Production)

For production, avoid storing the key in `application.properties`. Use environment variables instead:

```
groq.api.key=${GROQ_API_KEY}
```

Then set `GROQ_API_KEY` in your environment or server config.
