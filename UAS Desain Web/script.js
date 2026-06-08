const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const termsInput = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    function validateForm() {
        let isValid = true;
        if (nameInput.value.trim() === "") {
            setError(nameInput);
            isValid = false;
        } else {
            setSuccess(nameInput);
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            setError(emailInput);
            isValid = false;
        } else {
            setSuccess(emailInput);
        }
        if (phoneInput.value.trim() === "") {
            setError(phoneInput);
            isValid = false;
        } else {
            setSuccess(phoneInput);
        }
        if (subjectInput.value === "") {
            setError(subjectInput);
            isValid = false;
        } else {
            setSuccess(subjectInput);
        }
        if (messageInput.value.trim() === "") {
            setError(messageInput);
            isValid = false;
        } else {
            setSuccess(messageInput);
        }
        if (!termsInput.checked) {
            isValid = false;
        }
        if (isValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }
    function setError(input) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    function setSuccess(input) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    const inputs = [nameInput, emailInput, phoneInput, subjectInput, messageInput, termsInput];

    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('change', validateForm);
    });
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Pesan Anda berhasil terkirim!");
        contactForm.reset();
        validateForm();
        inputs.forEach(i => i.classList.remove('valid'));
    });
}
document.addEventListener("mousemove", function (e) {
    let dot = document.createElement("div");
    dot.className = "cursor-dot";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    const colors = ["#637197ff", "#58718dff", "#707082ff",];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.backgroundColor = randomColor;

    document.body.appendChild(dot);

    setTimeout(function () {
        dot.remove();
    }, 50);
});
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-item') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
const modal = document.getElementById('portfolioModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBadge = document.getElementById('modalBadge');
function openModal(title, imgSrc, desc, category) {
    if (modal) {
        modal.style.display = 'flex';
        modalTitle.innerText = title;
        modalImg.src = imgSrc;
        modalDesc.innerText = desc;
        modalBadge.innerText = category;
        document.body.style.overflow = 'hidden';
    }
}
function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}