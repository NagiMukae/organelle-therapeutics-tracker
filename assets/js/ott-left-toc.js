document.addEventListener("DOMContentLoaded", function () {
  const tocList = document.getElementById("ott-left-toc-list");
  const content = document.querySelector(".page__content");

  if (!tocList || !content) return;

  const headings = Array.from(content.querySelectorAll("h2"))
    .filter(function (heading) {
      const text = heading.textContent.trim();

      return text &&
             !heading.closest(".footnotes");
    });

  if (headings.length === 0) {
    const toc = document.querySelector(".ott-left-toc");
    if (toc) toc.style.display = "none";
    return;
  }

  function slugify(text, index) {
    return "section-" + index + "-" + text
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
      .replace(/^-+|-+$/g, "");
  }

  headings.forEach(function (heading, index) {
    if (!heading.id) {
      heading.id = slugify(heading.textContent, index);
    }

    const li = document.createElement("li");
    li.className = "ott-left-toc__item ott-left-toc__item--" + heading.tagName.toLowerCase();

    const link = document.createElement("a");
    link.className = "ott-left-toc__link";
    link.href = "#" + heading.id;
    link.textContent = heading.textContent.trim();

    li.appendChild(link);
    tocList.appendChild(li);
  });

  const links = Array.from(document.querySelectorAll(".ott-left-toc__link"));

  function setActiveLink(id) {
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  });

  headings.forEach(function (heading) {
    observer.observe(heading);
  });

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      const target = document.getElementById(id);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.pushState(null, "", "#" + target.id);
      setActiveLink(target.id);
    });
  });
});
