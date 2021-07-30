class MyHeader extends HTMLElement {
    ConnectedCallback() {
        this.innerHTML = "
        <header class="menu" data-aos="fade-down">
        <nav>
            <a href="index.html"><img src="images/logo.png" alt=""></a>
            <div class="nav-links" id="navLinks">

                <i class="fas fa-window-close " onclick="hideMenu()"></i>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="products.html">Products</a>
                        <div class="sub-menu-products">
                            <ul>
                                <li><a href="">Denims</a></li>
                                <li><a href="">Suits</a></li>
                                <li><a href="">Sweaters</a></li>
                                <li><a href="">Intimates</a>
                                <li><a href="">Activewear</a></li>
                                <li><a href="">Outingwear</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">Design Studio</a></li>
                    <li><a href="">Sustainability</a></li>
                    <li><a href="">Team</a></li>
                </ul>
            </div>

            <i class="fas fa-bars " id="hideButton" onclick="showMenu()"></i>
        </nav>
    </header>
        ""
    }
}

customElements.define('my-header', MyHeader)