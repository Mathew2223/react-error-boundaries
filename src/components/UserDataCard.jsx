import { useState } from "react";

export default function UserDataCard({ isCorrupted }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const [showText, setShowText] = useState(false);

    if (isCorrupted) throw new Error('Критическая ошибка: Данные пользователя были повреждены при загрузке!')

    const handleReset = () => {
        setName('');
        setEmail('');
        setRole('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowText(true);
        handleReset();
    }

    const styles = {
        card: {
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '400px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontFamily: 'sans-serif'
        },
        formGroup: {
            marginBottom: '16px'
        },
        label: {
            display: 'block',
            marginBottom: '6px',
            fontWeight: '600',
            color: '#333',
            fontSize: '14px'
        },
        input: {
            width: '100%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '14px',
            boxSizing: 'border-box' // Чтобы padding не ломал ширину
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.2s'
        },
        successMessage: {
            marginTop: '16px',
            padding: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            borderRadius: '6px',
            textAlign: 'center'
        }
    };

    return (
        <div className={styles.card}>
            <h2 style={{ marginTop: 0, textAlign: 'center', color: '#444' }}>👤 Профиль пользователя</h2>
            <form action="" method="post" id="userForm" onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Имя: {name}</label>
                    <input 
                        type="text" 
                        id="name"
                        name="user_name" 
                        placeholder="Oleg" 
                        style={styles.input} 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email: {email}</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="user_email" 
                        placeholder="oleg@gmail.com" 
                        style={styles.input} 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="role" style={styles.label}>Роль: {role}</label>
                    <input 
                        type="text" 
                        id="role" 
                        name="user_role" 
                        placeholder="Senior Fullstack Developer" 
                        style={styles.input} 
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    />
                </div>
            <button type="submit" style={styles.button}>Отправить данные</button>
            { showText && <p id="messageArea" style={styles.successMessage}>✅ Отлично!</p> }
        </form>
        </div>
    )
}