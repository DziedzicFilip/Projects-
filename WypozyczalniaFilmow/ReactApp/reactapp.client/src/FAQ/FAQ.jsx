import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MainKaruzela } from '../MainKaruzela/MainKaruzela';
import chatImage from '../assets/chat.png';

export const FAQ = () => {
    const [showChatMenu, setShowChatMenu] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleChatMenuClick = () => {
        setShowChatMenu(!showChatMenu);
    };

    const handleChatInputChange = (event) => {
        setChatInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (chatInput.trim() !== '') {
            setChatHistory([...chatHistory, { sender: 'You', message: chatInput }]);
            setChatInput('');
        }
    };

    return (
        <Container fluid style={{ backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: 0, position: 'relative' }}>
            
            <MainKaruzela>
             
                <Container style={{
                    backgroundColor: 'rgba(211, 211, 211, 0.7)',
                    borderRadius: '8px',
                    margin: '0 auto',
                    color: '#000000'
                }}>
                    <h1 className="text-center" style={{ margin:'10px' } }>FAQ-NAJCZEŚCIEJ ZADAWANE PYTANIA</h1>
                    <Accordion defaultActiveKey="0" style={{ width: '50%', margin: '50px auto', padding: '20px' }}>

                        <Accordion.Item eventKey="0" >
                            <Accordion.Header   >Jak mogę wypożyczyć film?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Aby wypożyczyć film, zaloguj się na swoje konto na naszej stronie internetowej, przeglądaj dostępne filmy, wybierz ten, który Cię interesuje, a następnie kliknij przycisk Wypożycz.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Jak długo mogę trzymać wypożyczony film?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Standardowy czas wypożyczenia wynosi 3 dni. Po upływie tego czasu film zostanie automatycznie zwrócony.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>Czy istnieje możliwość przedłużenia czasu wypożyczenia?</Accordion.Header>
                            <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#FFFF' }}>
                                Tak, możesz przedłużyć czas wypożyczenia filmu kontaktując się z naszym działem obsługi klienta przed upływem terminu wypożyczenia.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Container>
            </MainKaruzela>
           
            <Button variant="primary" onClick={handleChatMenuClick} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}>
                <img src={chatImage} alt="Chat" style={{ width: '30px', height: '30px' }} />
            </Button>

            {showChatMenu && (
                <div style={{ position: 'fixed', bottom: '70px', right: '20px', zIndex: 998 }}>
                    <Card style={{ width: '300px', backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header style={{ backgroundColor: '#444444', color: 'white' }}>Chat online</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                                    <div style={{ height: '200px', overflowY: 'scroll' }}>
                                        {chatHistory.map((chat, index) => (
                                            <div key={index} style={{ marginBottom: '10px' }}>
                                                <strong>{chat.sender}: </strong>{chat.message}
                                            </div>
                                        ))}
                                    </div>
                                    <input type="text" value={chatInput} onChange={handleChatInputChange} style={{ width: '100%', marginTop: '10px', backgroundColor: '#666666', color: 'white', border: 'none', padding: '5px' }} />
                                    <Button variant="secondary" onClick={handleSendMessage} style={{ marginTop: '10px' }}>Send</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </div>
            )}


           
        </Container>
    )
}
