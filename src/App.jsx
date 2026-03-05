import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import UserDataCard from './components/UserDataCard'
import Header from './ui/Header'
import Footer from './ui/Footer'
import { useState } from 'react'

export default function App() {
    const [brokeDatas, setBrokeDatas] = useState(false); 

    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Header />

            <div style={{ 
                textAlign: 'center', 
                marginBottom: '30px', 
                padding: '15px', 
                background: '#fff', 
                display: 'inline-block',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '16px' }}>
                    <input 
                        type="checkbox" 
                        checked={brokeDatas} 
                        onChange={(e) => setBrokeDatas(e.target.checked)}
                        style={{ width: '20px', height: '20px', accentColor: '#d32f2f' }}
                    />
                    <span>☢️ Симулировать поломку данных</span>
                </label>
                <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                    Хочешь вызвать ошибку в карточке?
                </p>
            </div>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    setBrokeDatas(false);
                }}
            >
                <UserDataCard isCorrupted={brokeDatas} />
            </ErrorBoundary>
            <div style={{ marginTop: '50px', textAlign: 'center', color: '#777' }}>
                <hr style={{ border: '0', borderTop: '1px dashed #ccc', marginBottom: '20px' }} />
                <p>👇 Этот текст виден асболютно всегда, даже при сломанной карточке</p>
                <p>Приложение не упало целиком благодаря Error Boundary!</p>
            </div>
            <Footer />
        </div>
    )
}