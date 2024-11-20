(function () {
    const arr = Array.from(document.querySelectorAll('span[style="color:#FF6549;"]'));
    const spans = arr.filter(
        value => {
            return !/[0-9]+[%s]?$/.test(value.textContent.trim())
        }
    );
    const mp = new Map();

    spans.forEach(span => {
        const str = span.textContent.trim();
        if (!mp.has(str))
            mp.set(str, mp.size);
    });

    spans.forEach(span => {
        const str = span.textContent.trim();
        span.style.color = `hsl(${Math.floor(mp.get(str) * 360 / mp.size)}, 100%, 70%)`;
    });
})();
