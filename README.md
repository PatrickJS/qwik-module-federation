```html
    <script type="module">
      //----------------------------------------------------------
      // Webpack Module Federation approach
      //----------------------------------------------------------
      // host container
      const entry = await import("http://localhost:3001/assets/remoteEntry.js");
      if (!window.__federation_shared__) window.__federation_shared__ = {};
      const sharedScope = window.__federation_shared__;
      entry.init(sharedScope);
      const mod = await entry.get(".");
      const main = mod();
      // end

      const el = document.getElementById("app");
      const app = await main.render(el);
      window.MFE_app = app;
      // app.cleanup();

      //----------------------------------------------------------
      // Qwik MFE approach
      //----------------------------------------------------------
      const html = await fetch('http://localhost:3000/').then(res => res.text());
      el.innerHTML = html;
      // TODO: qwik can handle this better
      const scripts = el.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        script.getAttributeNames().forEach(attr => {
          newScript.setAttribute(attr, script.getAttribute(attr));
        });
        script.replaceWith(newScript);
      });
    </script>
    <script id="qwikloader">
      // qwik loader
    </script>
```
