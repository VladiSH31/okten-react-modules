import {memo} from "react";
// Використав memo для сталої сторінки інформація на ній не змінюється.
// Тому при змінах у інших компонентах цей компонент повторно не рендериться
const ContactComponent = memo(() => {
    console.log('Contact test')

    return (
        <div>
            Contacts
        </div>
    );
})

export default ContactComponent;