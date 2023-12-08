document.addEventListener("DOMContentLoaded", function() {
    const messages = {
        "Alice": [
            { sender: "Alice", text: "Hi there!" },
            { sender: "Me", text: "Hello, Alice!" }
        ],
        "Bob": [
            { sender: "Bob", text: "What's up?" },
            { sender: "Me", text: "Not much, you?" }
        ],
        "Charlie": [
            { sender: "Charlie", text: "Hey, how's it going?" },
            { sender: "Me", text: "Pretty good, thanks! And you?" }
        ],
        "Diana": [
            { sender: "Diana", text: "Are you taking any medicine?" },
            { sender: "Me", text: "Not yet, still figuring it out." }
        ]
    };

    function displayMessages(contactName) {
        const messageArea = document.querySelector('.msg_card_body');
        messageArea.innerHTML = '';

        messages[contactName].forEach(msg => {
            const msgWrapDiv = document.createElement('div');
            msgWrapDiv.classList.add('msg_cotainer_wrap');
        
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('msg_cotainer');
            msgDiv.classList.add(msg.sender === "Me" ? 'msg_cotainer_user' : 'msg_cotainer_contact');
            msgDiv.innerText = msg.text;
        
            msgWrapDiv.appendChild(msgDiv);
            messageArea.appendChild(msgWrapDiv);
        });                        

        document.getElementById('chatWith').innerText = 'Chat with ' + contactName;
    }

    document.querySelectorAll('.contact').forEach(contact => {
        contact.addEventListener('click', function() {
            const contactName = this.getAttribute('data-contact');
            displayMessages(contactName);
        });
    });

    displayMessages('Alice');
});