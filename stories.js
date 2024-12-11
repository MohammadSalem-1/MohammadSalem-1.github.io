// �������� ������ ������
const stories = [
    {
        name: "������ ����",
        start: "���� ���� �� ����� ������� ���������� ����� ������ ���� �� ������.",
        challenge: "�� ������ ���� ����� ����� ��� ��� ����� ����� ��� ���� ����� �����.",
        turningPoint: "����� ��������� ������� ���� ���� ����� ����� �� ������ �������� ������ �������.",
        result: "���� ��� ���� ����� ��� ����� �� �������."
    },
    {
        name: "���� ����",
        start: "��� �� ���� ����� ���� ���� ���� ����� ����� ������ ��� �������.",
        challenge: "��� ������� ����������� �� ����� �������.",
        turningPoint: "������� ����� ��������� ����ȡ ��� ����� ������ ������ ���� ������� ������.",
        result: "���� ������ �� ���� �������� �� ������."
    },
    {
        name: "��������� �������",
        start: "���� �� ������ ��������� ���� �� ���� �������.",
        challenge: "��� ����� �� �� ����� �������� ��� �������� �������� ������.",
        turningPoint: "������� ��� ������� ������� ��� ��� ������� ����� ����� �������.",
        result: "���� �� ���� �������� �� ����� ��� �����."
    },
    {
        name: "��� ����� �����",
        start: "��� �� ����� ������� ������ ��� ����� �������.",
        challenge: "���� ������ ����� ������ ���� ����� �� �������.",
        turningPoint: "������� ��� ���� ������� �������� ��� ���� ������� ��� ������� �������.",
        result: "���� ������ ����� �����."
    }
];

// ���� ������ �����
function addStory(story) {
    const container = document.getElementById('stories-container');

    const storyDiv = document.createElement('div');
    storyDiv.classList.add('story');
    
    storyDiv.innerHTML = `
        <h2>${story.name}</h2>
        <p><strong>�������:</strong> ${story.start}</p>
        <p><strong>������:</strong> ${story.challenge}</p>
        <p><strong>������ �������:</strong> ${story.turningPoint}</p>
        <p><strong>�������:</strong> ${story.result}</p>
    `;

    container.appendChild(storyDiv);
}

// ����� ����� ��� ������
stories.forEach(story => {
    addStory(story);
});

// ����� ���� ��������
const promoDiv = document.createElement('div');
promoDiv.classList.add('promo');
promoDiv.innerHTML = `
    <h3>��� ��� �� ��� ���� ������� ������ ������� ������� ������ �����.</h3>
    <p>�� �������� <strong>FIRST ACADEMY</strong>� ���� ��� �� ���� ���� ���� ����� �����.</p>
`;
document.getElementById('stories-container').appendChild(promoDiv);

// ����� ���� �������� ������
const promoDiv2 = document.createElement('div');
promoDiv2.classList.add('promo');
promoDiv2.innerHTML = `
    <h3>���� ������� ������� ����� �� �������� FIRST ACADEMY!</h3>
    <p>���� ����� ���� ����� ����� �� ����� ������. <a href="https://wa.me/201090603880">��� ���</a></p>
`;
document.getElementById('stories-container').appendChild(promoDiv2);

document.body.addEventListener('click', function(e) {
    var ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${e.clientX - 15}px`;  // ������ ���� ����� ����� ��� ���� �����
    ball.style.top = `${e.clientY - 15}px`;   // ������ ���� ����� ����� ��� ���� �����
    document.body.appendChild(ball);

    // ����� ����� ��� �� ����� �� ������
    setTimeout(() => {
        ball.remove();
    }, 2000);  // ��� ������� ��� 2 �����
});

