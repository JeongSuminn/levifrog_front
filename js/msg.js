const host = "http://127.0.0.1:8083";

const msgsContainer = document.querySelector('.msgs-wrapper');

function getmsgs() {
    axios.get(`${host}/msg`)
        .then(response => {
            console.log(response.data);
            rendermsgs(response.data.msgs);
        })
        .catch(error => {
            console.error('Error fetching msgs:', error);
        });
}

function rendermsgs(msgs) {
    msgsContainer.innerHTML = ''; // msgsContainer 초기화
    msgs.forEach(msg => {
        const msgDiv = document.createElement('div');
        const msgDatetime = document.createElement('div');
        msgDiv.classList.add('msg-item');
        msgDatetime.classList.add('msg-datetime');
        msgDiv.textContent = msg.content;
        msgDatetime.textContent = msg.datetime;
        msgsContainer.appendChild(msgDiv);
        msgDiv.appendChild(msgDatetime);

        //삭제 버튼 생성 및 이벤트 처리
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';

        deleteBtn.addEventListener('click', function () {
            deletemsg(msg.id);
        });

        //msgDiv에 삭제 버튼 추가
        msgDiv.appendChild(deleteBtn);
    })
}

window.addEventListener('DOMContentLoaded', function () {
    getmsgs();
});

const msgInput = document.querySelector('.msg-input');
msgInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addmsg();
    }
});

function addmsg() {
    const title = msgInput.value.trim();
    let msgData = {
        id: 0,
        content: title,
        datetime: "1"
    };
    if (title === '') return;

    axios.post(`${host}/msg`, msgData)
        .then(response => {
            msgInput.value = '';
            getmsgs();
        })
        .catch(error => {
            console.error('Error adding msg:', error);
        });
}

function deletemsg(msgId) {
    axios.delete(`${host}/msg/${msgId}`)
        .then(function (response) {
            console.log('msg deleted: ', response.data);
            getmsgs();
        })
        .catch(function (error) {
            console.error('Error deleting msg:', error);
        });
}

