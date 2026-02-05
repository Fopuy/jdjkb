class CustomHighlights extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                aside {
                    background-color: white;
                    width: 250px;
                    padding: 1rem;
                    box-shadow: -2px 0 4px rgba(0,0,0,0.1);
                }
                .highlight-section {
                    margin-bottom: 1.5rem;
                }
                .highlight-title {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    padding-bottom: 0.25rem;
                    border-bottom: 1px solid #e5e7eb;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .highlight-item {
                    padding: 0.5rem;
                    border-radius: 0.25rem;
                    margin-bottom: 0.5rem;
                    background-color: #f9fafb;
                }
                .highlight-item:hover {
                    background-color: #f3f4f6;
                }
                @media (max-width: 768px) {
                    aside {
                        width: 100%;
                    }
                }
            </style>
            <aside>
                <div class="highlight-section">
                    <div class="highlight-title">
                        <i data-feather="star"></i>
                        <span>Featured</span>
                    </div>
                    <div class="highlight-item">
                        <div class="font-medium">Network Security Best Practices</div>
                        <div class="text-sm text-gray-500">Updated 2 days ago</div>
                    </div>
                    <div class="highlight-item">
                        <div class="font-medium">JavaScript ES6 Features</div>
                        <div class="text-sm text-gray-500">Updated 1 week ago</div>
                    </div>
                </div>
                
                <div class="highlight-section">
                    <div class="highlight-title">
                        <i data-feather="clock"></i>
                        <span>Recent</span>
                    </div>
                    <div class="highlight-item">
                        <div class="font-medium">My Experience with Docker</div>
                        <div class="text-sm text-gray-500">Posted yesterday</div>
                    </div>
                    <div class="highlight-item">
                        <div class="font-medium">Understanding TCP/IP</div>
                        <div class="text-sm text-gray-500">Posted 3 days ago</div>
                    </div>
                </div>
                
                <div class="highlight-section">
                    <div class="highlight-title">
                        <i data-feather="bookmark"></i>
                        <span>Bookmarks</span>
                    </div>
                    <div class="highlight-item">
                        <div class="font-medium">Useful CLI Commands</div>
                    </div>
                    <div class="highlight-item">
                        <div class="font-medium">CSS Grid Guide</div>
                    </div>
                </div>
            </aside>
        `;
    }
}
customElements.define('custom-highlights', CustomHighlights);