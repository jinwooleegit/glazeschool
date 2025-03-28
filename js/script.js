// 현재 페이지의 내비게이션 메뉴 항목 활성화
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
});

// 맨 위로 스크롤 버튼 기능 (나중에 추가할 예정)
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.classList.add('scroll-to-top');
    button.innerHTML = '&uarr;';
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });
}

// 스크롤 버튼은 추후 스타일과 함께 활성화할 예정
// createScrollToTopButton(); 