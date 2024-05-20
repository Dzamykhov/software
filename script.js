document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issueType = document.getElementById('issueType').value;
    const issue = document.getElementById('issue').value;
    const responseDiv = document.getElementById('response');

    console.log(`Имя: ${name}`);
    console.log(`Электронная почта: ${email}`);
    console.log(`Тип запроса: ${issueType}`);
    console.log(`Описание проблемы: ${issue}`);

    document.getElementById('supportForm').reset();

    responseDiv.style.display = 'block';
    responseDiv.className = 'response success';
    responseDiv.textContent = 'Ваш запрос успешно отправлен. Мы свяжемся с вами в ближайшее время.';
});
