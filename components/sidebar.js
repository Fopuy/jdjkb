class CustomSidebar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    width: 250px;
                    height: 100%;
                    padding: 1rem;
                    box-shadow: 2px 0 4px rgba(0,0,0,0.1);
                }
                .nav-section {
                    margin-bottom: 1.5rem;
                }
                .nav-title {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    padding-bottom: 0.25rem;
                    border-bottom: 1px solid #e5e7eb;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .nav-item {
                    padding: 0.5rem;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .nav-item:hover {
                    background-color: #f3f4f6;
                }
                @media (max-width: 768px) {
                    nav {
                        width: 100%;
                        height: auto;
                    }
                }
            </style>
            <nav>
                <div class="nav-section">
                    <div class="nav-title">
                        <i data-feather="hard-drive"></i>
                        <span>Networking</span>
                    </div>
                    <div class="nav-item" data-content="networking">
                        <i data-feather="globe"></i>
                        <span>Network Basics</span>
                    </div>
                    <div class="nav-item" data-content="networking">
                        <i data-feather="shield"></i>
                        <span>Security</span>
                    </div>
                    <div class="nav-item" data-content="networking">
                        <i data-feather="wifi"></i>
                        <span>Wireless</span>
                    </div>
                </div>
                
                <div class="nav-section">
                    <div class="nav-title">
                        <i data-feather="code"></i>
                        <span>Programming</span>
                    </div>
                    <div class="nav-item" data-content="programming">
                        <i data-feather="terminal"></i>
                        <span>Languages</span>
                    </div>
                    <div class="nav-item" data-content="programming">
                        <i data-feather="database"></i>
                        <span>Databases</span>
                    </div>
                    <div class="nav-item" data-content="programming">
                        <i data-feather="git-merge"></i>
                        <span>Version Control</span>
                    </div>
                </div>
                
                <div class="nav-section">
                    <div class="nav-title">
                        <i data-feather="edit"></i>
                        <span>Blog</span>
                    </div>
                    <div class="nav-item" data-content="blog">
                        <i data-feather="book"></i>
                        <span>Latest Posts</span>
                    </div>
                    <div class="nav-item" data-content="blog">
                        <i data-feather="calendar"></i>
                        <span>Archive</span>
                    </div>
                </div>
            </nav>
        `;
        
        // Add click handlers for navigation items
        this.shadowRoot.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const contentId = item.getAttribute('data-content');
                const event = new CustomEvent('sidebar-item-clicked', {
                    detail: { contentId },
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(event);
            });
        });
    }
}
customElements.define('custom-sidebar', CustomSidebar);