(function () {
    const arr = Array.from(document.querySelectorAll('span[style="color:#FF6549;"]'));
    const spans = arr.filter(
        value => {
            return !/[0-9]+[%s]?$/.test(value.textContent.trim())
        }
    );
    const mp = new Map();

    const project = str => {
        plural = str.charAt(str.length - 1) === "s";
        ind = 0;
        if (plural) {
            for (let i = 0; i < str.length; i ++) {
                if (str.charAt(i) < "0" || str.charAt(i) > "9") {
                    ind = i;
                    break;
                }
            }
        }
        else if (str.substr(0, 2) === "1 ") {
            ind = 2;
        }
        proj = str.slice(ind, str.length - plural).trim();
        return proj ? proj : str;
    }

    spans.forEach(span => {
        const str = span.textContent.trim();
        const proj = project(str);
        if (!mp.has(proj))
            mp.set(proj, mp.size);
    });

    console.log(mp);

    spans.forEach(span => {
        const str = span.textContent.trim();
        span.style.color = `hsl(${Math.floor(mp.get(project(str)) * 360 / mp.size)}, 100%, 70%)`;
    });
})();
