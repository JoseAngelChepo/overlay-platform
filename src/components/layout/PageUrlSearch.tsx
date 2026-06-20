"use client"

import { FormEvent, useId, useState } from "react"
import OverlayWordmark from "@/components/layout/OverlayWordmark"
import { useMessages } from "@/i18n/client"

function normalizeUrl(input: string): string | null {
  const trimmed = input.trim()
  if (!trimmed) return null

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
    const url = new URL(withProtocol)
    if (!url.hostname) return null
    return url.toString()
  } catch {
    return null
  }
}

export default function PageUrlSearch() {
  const messages = useMessages()
  const inputId = useId()
  const errorId = `${inputId}-error`
  const hintId = `${inputId}-hint`
  const [url, setUrl] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalized = normalizeUrl(url)

    if (!normalized) {
      setError(messages.home.urlInvalid)
      return
    }

    setError(null)
    setUrl(normalized)
  }

  return (
    <main className="page-url-search">
      <div className="page-url-search__glow" aria-hidden />
      <div className="page-url-search__content">
        <OverlayWordmark tagline={messages.home.tagline} />
        <form className="page-url-search__form" onSubmit={onSubmit} noValidate>
          <label className="page-url-search__label" htmlFor={inputId}>
            {messages.home.urlLabel}
          </label>
          <div
            className={`page-url-search__field${error ? " page-url-search__field--error" : ""}`}
          >
            <span className="page-url-search__icon-wrap">
              <svg
                className="page-url-search__icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M3 12h18M12 3c2.5 2.8 3.8 6.2 3.8 9s-1.3 6.2-3.8 9M12 3C9.5 5.8 8.2 9.2 8.2 12s1.3 6.2 3.8 9"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              id={inputId}
              className="page-url-search__input"
              type="url"
              inputMode="url"
              autoComplete="url"
              autoFocus
              placeholder={messages.home.urlPlaceholder}
              value={url}
              onChange={(event) => {
                setUrl(event.target.value)
                if (error) setError(null)
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : hintId}
            />
          </div>
          {error ? (
            <p id={errorId} className="page-url-search__error" role="alert">
              {error}
            </p>
          ) : (
            <p id={hintId} className="page-url-search__hint">
              {messages.home.urlHint}
            </p>
          )}
        </form>
      </div>

      <style jsx>{`
        .page-url-search {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1.5rem 1.5rem 12vh;
          background:
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37, 99, 235, 0.08), transparent),
            radial-gradient(ellipse 60% 40% at 50% 110%, rgba(79, 70, 229, 0.05), transparent),
            var(--app-bg);
          overflow: hidden;
        }

        .page-url-search__glow {
          position: absolute;
          top: 38%;
          left: 50%;
          width: min(42rem, 90vw);
          height: 14rem;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          pointer-events: none;
        }

        .page-url-search__content {
          position: relative;
          width: 100%;
          max-width: 42rem;
          animation: rise-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .page-url-search__form {
          width: 100%;
        }

        .page-url-search__label {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .page-url-search__field {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 0.9375rem 1.375rem;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(228, 228, 231, 0.95);
          border-radius: 999px;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.03),
            0 12px 32px rgba(15, 23, 42, 0.07);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .page-url-search__field:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: var(--app-border-strong);
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.04),
            0 16px 40px rgba(15, 23, 42, 0.09);
          transform: translateY(-1px);
        }

        .page-url-search__field:focus-within {
          background: var(--app-surface);
          border-color: rgba(37, 99, 235, 0.45);
          box-shadow:
            0 0 0 4px rgba(37, 99, 235, 0.1),
            0 12px 32px rgba(37, 99, 235, 0.12);
          transform: translateY(-1px);
        }

        .page-url-search__field--error {
          border-color: rgba(220, 38, 38, 0.55);
        }

        .page-url-search__field--error:focus-within {
          box-shadow:
            0 0 0 4px rgba(220, 38, 38, 0.1),
            0 12px 32px rgba(15, 23, 42, 0.07);
        }

        .page-url-search__icon-wrap {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 999px;
          color: var(--app-text-muted);
          background: var(--app-surface-muted);
          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .page-url-search__field:focus-within .page-url-search__icon-wrap {
          color: var(--app-primary);
          background: var(--app-primary-soft);
        }

        .page-url-search__icon {
          display: block;
        }

        .page-url-search__input {
          flex: 1;
          min-width: 0;
          padding: 0;
          font-family: var(--app-font);
          font-size: 1.0625rem;
          line-height: 1.5;
          color: var(--app-text);
          background: transparent;
          border: none;
          outline: none;
        }

        .page-url-search__input::placeholder {
          color: var(--app-text-faint);
        }

        .page-url-search__hint,
        .page-url-search__error {
          margin: 0.875rem 0 0;
          padding: 0 1.375rem;
          font-size: 0.8125rem;
          text-align: center;
        }

        .page-url-search__hint {
          color: var(--app-text-faint);
        }

        .page-url-search__error {
          color: var(--app-danger);
        }

        @keyframes rise-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .page-url-search {
            padding-bottom: 8vh;
          }

          .page-url-search__field {
            padding: 0.875rem 1.125rem;
          }

          .page-url-search__input {
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  )
}
