  function toggleReadMore(event) {
        event.preventDefault();
        const moreText = document.querySelectorAll('.more-text');
        const readMoreLink = event.target.closest('.read-more');

        moreText.forEach(text => {
            if (text.style.display === 'none') {
                text.style.display = 'block';
                readMoreLink.innerHTML = `
                    Read less
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5"></path>
                        <path d="m12 19-7-7 7-7"></path>
                    </svg>
                `;
            } else {
                text.style.display = 'none';
                readMoreLink.innerHTML = `
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                `;
            }
        });
    }