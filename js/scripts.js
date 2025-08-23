document.addEventListener('DOMContentLoaded', function() {
    console.log('自己紹介サイトが読み込まれました');
    
    // スムーズスクロール
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 詳細プロフィール表示/非表示機能
    const showDetailBtn = document.getElementById('showDetailBtn');
    const hideDetailBtn = document.getElementById('hideDetailBtn');
    const detailedProfile = document.getElementById('detailedProfile');
    
    if (showDetailBtn && detailedProfile) {
        showDetailBtn.addEventListener('click', function() {
            detailedProfile.style.display = 'block';
            showDetailBtn.style.display = 'none';
            
            // スムーズにスクロールして詳細セクションを表示
            setTimeout(() => {
                detailedProfile.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        });
    }
    
    if (hideDetailBtn && detailedProfile) {
        hideDetailBtn.addEventListener('click', function() {
            detailedProfile.style.display = 'none';
            showDetailBtn.style.display = 'inline-block';
            
            // プロフィールセクションの上部にスクロール
            const profileSection = document.getElementById('profile');
            if (profileSection) {
                profileSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // トップに戻るボタンの機能
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (backToTopBtn) {
        // スクロール時の表示/非表示制御
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // クリック時のトップへスクロール
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
