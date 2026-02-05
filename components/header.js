class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #4f46e5;
                    color: white;
                    padding: 1rem 2rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .header-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .search {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                input {
                    padding: 0.5rem;
                    border-radius: 0.25rem;
                    border: none;
                }
            </style>
            <header>
                <div class="header-content">
                    <div class="logo">
                        <i data-feather="cpu"></i>
                        <span>NetNerd Nexus</span>
                    </div>
                    <div class="search">
                        <input type="text" placeholder="Search knowledge base...">
                        <i data-feather="search"></i>
                    </div>
                </div>
            </header>
        `;
    }
}
customElements.define('custom-header', CustomHeader);