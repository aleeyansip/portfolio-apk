// This function injects the navigation menu into any page.
// The 'basePath' tells the links if they need to jump out of a folder (e.g., '../')
function loadNav(basePath = '') {
    const navHTML = `
        <nav class="navbar">
            
            <!-- NEW: Brand Container with Logo Placeholder on the Far Left -->
            <div class="brand-container">
                <!-- REPLACE PLACEHOLDER IMAGE BELOW LATER -->
                <img src="${basePath}assets/images/logo-placeholder.png" alt="Sedap Cravings Pastry Chef Logo" class="nav-logo">
                <div class="logo-text">Sedap Cravings Pastry Chef</div>
            </div>
            
            <!-- The Hamburger Icon for Mobile -->
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <!-- The Navigation Links -->
            <ul class="nav-links" id="nav-links">
                <li><a href="${basePath}index.html">Home</a></li>
                <li class="dropdown">
                    <a href="#">About Us ▼</a>
                    <ul class="dropdown-content">
                        <li><a href="${basePath}about/products.html">Products</a></li>
                        <li><a href="${basePath}about/team.html">Team</a></li>
                        <li><a href="${basePath}about/finance.html">Financial Statement</a></li>
                        <li><a href="${basePath}about/vision.html">Vision, Mission & Objectives</a></li>
                        <li><a href="${basePath}about/reviews.html">Customers' Reviews</a></li>
                        <li><a href="${basePath}about/reflection.html">Reflection</a></li>
                        <li><a href="${basePath}about/problem-solving.html">Problem Solving</a></li>
                        <li><a href="${basePath}about/marketing.html">Marketing Channels</a></li>
                        <li><a href="${basePath}about/achievements.html">Achievements</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">Personal Achievement ▼</a>
                    <ul class="dropdown-content">
                        <li><a href="${basePath}personal/director.html">Director</a></li>
                        <li><a href="${basePath}personal/secretary1.html">Secretary 1</a></li>
                        <li><a href="${basePath}personal/secretary2.html">Secretary 2</a></li>
                        <li><a href="${basePath}personal/finance1.html">Finance 1</a></li>
                        <li><a href="${basePath}personal/finance2.html">Finance 2</a></li>
                        <li><a href="${basePath}personal/marketing1.html">Marketing 1</a></li>
                        <li><a href="${basePath}personal/marketing2.html">Marketing 2</a></li>
                    </ul>
                </li>
                <li><a href="${basePath}gallery.html">Gallery</a></li>
                <li><a href="${basePath}contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    // Finds the empty div in the HTML and fills it with the menu
    document.getElementById('nav-container').innerHTML = navHTML;
}

// This function opens and closes the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}