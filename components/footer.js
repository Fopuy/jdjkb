class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #4f46e5;
                    color: white;
                    padding: 1rem 2rem;
                    text-align: center;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                .social-links a {
                    color: white;
                }
                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column;
                        gap: 1rem;
                    }
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div>© 2023 NetNerd Nexus. All rights reserved.</div>
                    <div class="social-links">
                        <a href="#"><i data-feather="github"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="linkedin"></i></a>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);