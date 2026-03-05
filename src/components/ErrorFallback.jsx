import React from "react"

export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" style={{
            border: '2px solid #ffcccc',
            backgroundColor: '#fff0f0',
            padding: '24px',
            borderRadius: '12px',
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'sans-serif'
        }}> 
            <h1 style={{ color: '#d32f2f', marginTop: 0 }}>Что-то пошло не так! </h1>
            <p style={{ color: '#555', marginBottom: '20px' }}>
                "Не удалось загрузить данные для пользователя: <br />
                Олег Разработчиков. Данные повреждены!"
            </p>
            <pre style={{
                background: 'rgba(0,0,0,0.05)',
                padding: '10px',
                borderRadius: '6px',
                textAlign: 'left',
                fontSize: '12px',
                overflowX: 'auto'
            }}>
                {error.message}
            </pre>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={resetErrorBoundary} style={{
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>
                    🔄 Попробовать снова
                </button>
                <button onClick={() => console.log('Отчет отправлен:', error)}
                style={{
                    backgroundColor: 'transparent',
                    color: '#d32f2f',
                    border: '1px solid #d32f2f',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
                >
                    📩 Отправить отчет разработчику
                </button>
            </div>
        </div>
    )
}