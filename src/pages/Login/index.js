import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

export function Login() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [accessToken, setAccessToken] = useState(false);
    const onFinish = (values) => {
        localStorage.setItem('accessToken', true);
        setAccessToken(!accessToken);
    };

    console.log(accessToken)

    useEffect(() => {
        if (accessToken === true) {
            navigate('/dashboard');
        }
    }, [accessToken]);


    return (
        <div className={styles.container}>
            <Form layout="vertical" className={styles.form} form={form} onFinish={onFinish} initialValues={{}}>
                <div className={styles.title}>Binance Login</div>
                <Form.Item
                    className={styles.label}
                    label="Email / Phone Number"
                    name="emailOrPhoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a valid email or phone number',
                        },
                    ]}
                >
                    <Input  />
                </Form.Item>
                <Form.Item
                    className={styles.label}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password',
                        },
                    ]}
                >
                    <Input.Password  />
                </Form.Item>
                <Form.Item>
                    <Button className={styles.button} htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;
