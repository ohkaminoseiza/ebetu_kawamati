function categoryById(id) {
    return SITE_CATEGORIES.find(category => category.id === id);
}

function projectsByCategory(categoryId) {
    return SITE_PROJECTS.filter(project => project.categoryId === categoryId);
}

function projectUrl(project) {
    const category = categoryById(project.categoryId);
    return `${category.file}#${project.id}`;
}

function escapeAttr(value) {
    return String(value).replace(/"/g, '&quot;');
}

function imageMarkup(project, className) {
    if (project.image) {
        return `<img class="${className}" src="${project.image}" alt="${escapeAttr(project.title)}">`;
    }

    return `<div class="${className} ${project.imageClass || 'placeholder-image'}" role="img" aria-label="${escapeAttr(project.title)}"></div>`;
}

function statusBadge(project) {
    return `<span class="status-badge status-${project.status}">${project.statusLabel}</span>`;
}

function renderSidebar(activeCategoryId) {
    const sidebar = document.querySelector('[data-sidebar]');
    if (!sidebar) return;

    const categoryLinks = SITE_CATEGORIES.map(category => {
        const activeClass = category.id === activeCategoryId ? ' active' : '';
        return `
            <div class="category-group${activeClass}">
                <div class="category-header"><a href="${category.file}">${category.title}</a></div>
            </div>`;
    }).join('');

    sidebar.innerHTML = `
        ${categoryLinks}
        <div class="sidebar-gpt-card">
            <a href="https://chatgpt.com/g/g-69c9966cca2481918930d5166dcb7ac1-jiang-bie-shi-kawamatitukurizhi-yuan-gpt" target="_blank" rel="noopener">
                <div class="gpt-card-icon">🤖</div>
                <div class="gpt-card-title">条丁目スタイル支援GPT</div>
            </a>
        </div>
        <div class="sidebar-about collapsed">
            <button class="sidebar-about-header" type="button" onclick="toggleAbout()">
                条丁目スタイルとは <span class="sidebar-about-toggle">▼</span>
            </button>
            <div class="sidebar-about-body">
                <p>江別市の「かわまちづくり事業」では、石狩川や千歳川、旧岡田倉庫などの地域の魅力を、「条丁目スタイル」という暮らし方として大切にしていきたいと考えています。</p>
                <p>これは、特別なイベントや観光のためだけでなく、川や水辺を私たちの日常生活に自然に取り入れていくことを目指すものです。</p>
                <p>たとえば、川沿いを散歩したり、水辺で人と交流したり、文化的な活動を楽しんだりすることが、「特別な日のこと」ではなく、「毎日の暮らしの当たり前」になっていくイメージです。</p>
                <p>そうした積み重ねの中で、地域への愛着や誇りが自然と育まれていきます。</p>
                <p>「川」と「まち」がひとつになった空間を、住民みんなで日々の暮らしの中に取り込んでいくことが、地域の将来をみんなで一緒に考えていくための大切な第一歩になると考えています。</p>
                <p>このまちの主役は、ここに暮らす皆さんです。「こんなことをやってみたい」「こんな使い方があるのでは」といった小さなアイデアや気づきを、ぜひ周りの人と話し合い、一緒に形にしていきましょう。</p>
                <p>皆さん一人ひとりの参加が、江別の川とまちの未来をつくっていきます。</p>
            </div>
        </div>`;
}

function renderHome() {
    const main = document.querySelector('[data-content]');
    if (!main) return;

    const cards = SITE_PROJECTS.map(project => {
        const category = categoryById(project.categoryId);
        return `
            <a class="project-card" href="${projectUrl(project)}">
                <div class="card-top">
                    <div class="card-info">
                        <span class="category-chip">${category.title}</span>
                        <div class="card-title-row">
                            <span class="project-icon">${project.icon}</span>
                            <h2 class="project-title">${project.title}</h2>
                        </div>
                        ${statusBadge(project)}
                    </div>
                    ${imageMarkup(project, 'card-image')}
                </div>
                <p class="project-desc">${project.summary}</p>
            </a>`;
    }).join('');

    main.innerHTML = `
        <section class="home-intro">
            <p class="home-eyebrow">江別市かわまちづくり情報共有サイト</p>
            <h2>川とまちを、ライフスタイルとして考える。</h2>
            <p>「条丁目スタイル」は、川沿いの散歩や歴史資源の活用、イベント、地域連携など、かわまちづくりに関わるさまざまな取り組みを、同じ地図の上で見える化するための枠組みです。
本サイトでは、各カードから個別のプロジェクトを確認し、コメントを通じて意見交換や情報共有を行うことができます。</p>
        </section>

        <section class="category-overview" aria-label="カテゴリ一覧">
            ${SITE_CATEGORIES.map(category => `
                <a class="category-overview-card" href="${category.file}">
                    <span>${category.title}</span>
                    <small>${projectsByCategory(category.id).length}件</small>
                </a>
            `).join('')}
        </section>

        <div class="section-heading">
            <h2>プロジェクト</h2>
            <a href="projects.html">一覧で見る</a>
        </div>

        <div class="projects-grid">${cards}</div>

        <div class="notice-section">
            <h2 class="notice-title">お知らせ&amp;掲示板</h2>
            <p>本ウェブページは、「かわまちづくり連携会議」における関係者間の情報共有を図るとともに、各種事業の内容を一覧的に整理し、可視化することを目的として作成・公開いたしました。</p>
            <p>現在は試行的な運用段階にあるため、掲載しております各事業の内容は仮のものとなっております。今後は、連携会議での議論や進捗状況を踏まえつつ、内容の精査および更新を順次行っていく予定です。</p>
        </div>`;
}

function renderProjectIndex() {
    const main = document.querySelector('[data-content]');
    if (!main) return;

    main.innerHTML = `
        <h2 class="page-title">プロジェクト一覧</h2>
        <div class="project-index">
            ${SITE_CATEGORIES.map(category => `
                <section class="project-index-section">
                    <div class="project-index-heading">
                        <h3 class="project-index-category"><a href="${category.file}">${category.title}</a></h3>
                        <p>${category.lead}</p>
                    </div>
                    <ul class="project-index-list">
                        ${projectsByCategory(category.id).map(project => `
                            <li>
                                <a href="${projectUrl(project)}">${project.icon} ${project.title}</a>
                                ${statusBadge(project)}
                            </li>
                        `).join('')}
                    </ul>
                </section>
            `).join('')}
        </div>`;
}

function renderDetailPage(categoryId) {
    const main = document.querySelector('[data-content]');
    const category = categoryById(categoryId);
    if (!main || !category) return;

    const detailCards = projectsByCategory(categoryId).map(project => `
        <article class="detail-card" id="${project.id}">
            <div class="detail-card-header">
                <div>
                    <p class="detail-category-label">${category.title}</p>
                    <div class="detail-card-title"><span>${project.icon}</span><span>${project.title}</span></div>
                </div>
                ${statusBadge(project)}
            </div>
            ${imageMarkup(project, 'detail-card-image')}
            <p class="detail-card-desc">${project.detail}</p>
            <div class="comment-section" data-project-id="${project.id}">
                <h3 class="comment-section-title">💬 コメント</h3>
                <div class="comment-list" id="comments-${project.id}"></div>
                <div class="comment-form">
                    <p class="comment-form-title">コメントを書く</p>
                    <div class="form-row">
                        <input type="text" id="name-${project.id}" placeholder="お名前（省略可）">
                    </div>
                    <div class="form-row">
                        <textarea id="text-${project.id}" placeholder="ご意見・ご感想をお書きください"></textarea>
                    </div>
                    <button class="comment-submit" onclick="addComment('${project.id}')">送信</button>
                </div>
            </div>
        </article>`).join('');

    main.innerHTML = `
        <div class="category-page-header">
            <h2 class="page-title">${category.title}</h2>
            <p>${category.lead}</p>
        </div>
        <div class="detail-grid">${detailCards}</div>`;

    if (typeof window !== 'undefined' && window.location.hash) {
        window.requestAnimationFrame(() => {
            const target = document.getElementById(window.location.hash.slice(1));
            if (target) target.scrollIntoView();
        });
    }
}

function toggleAbout() {
    document.querySelectorAll('.sidebar-about').forEach(function(el) {
        el.classList.toggle('collapsed');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const page = document.body.dataset.page;
    const categoryId = document.body.dataset.category;

    renderSidebar(categoryId);

    if (page === 'home') {
        renderHome();
    } else if (page === 'projects') {
        renderProjectIndex();
    } else if (page === 'category') {
        renderDetailPage(categoryId);
    }
});
