<script>
  const pointColor = getComputedStyle(document.documentElement).getPropertyValue('--point-color');

  window.simpleJekyllSearch = new SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '{{ site.baseurl }}/assets/js/search-data.js',
    searchResultTemplate: `
      <li>
        <div>
          <i class="fas fa-folder fa-fw"></i>
          <a href="{url}">{categories}</a>
        </div>
        <div>
          <i class="fas fa-book fa-fw"></i>
          <a href="{url}">{title}</a>
        </div>
        <div>
          <i class="fas fa-tags fa-fw"></i>
          <a href="{url}">{tags}</a>
        </div>
        <div>
          <i class="fas fa-calendar-alt fa-fw"></i>
          <a href="{url}">{date}</a>
        </div>
        <div>
          <i class="fas fa-link fa-fw"></i>
          <a href="{url}" style="font-size: 1rem;">{urlString}</a>
        </div>
      </li>
    `,
    templateMiddleware: function(prop, value, template) {
      if (prop === 'url') {
        return value;
      }

      const queries = document.getElementById('search-input').value
        .split(' ').filter(Boolean)
        .map(s => s.toLowerCase())
        .reduce((a, b) => {
          if (a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);

      const lowerCaseValue = value.toLowerCase();
      let ranges = [];
      for (const query of queries) {
        let index = 0;
        while ((index = lowerCaseValue.indexOf(query, index)) > -1) {
          ranges.push([index, index + query.length]);
          index += query.length;
        }
      }

      if (queries.length > ranges.length) {
        return value
      }

      ranges.sort((a, b) => a[0] - b[0] || b[1] - a[1])
      ranges = ranges.reduce((a, b) => {
        const last = a[a.length - 1];
        if (a.length == 0 || last[1] < b[0]) {
          a.push(b);
        } else if (last[1] < b[1]) {
          a[a.length - 1][1] = b[1];
        }
        return a;
      }, []);

      for (let i = 0; i < ranges.length; i++) {
        ranges[i][0] += i * 7;
        ranges[i][1] += i * 7 + 3;
      }
      for (const range of ranges) {
        value = value.insert('<b>', range[0]).insert('</b>', range[1]);
      }
      return value;
    },
    noResultsText: '',
    limit: 100
  });

  window.onload = function() {
    window.simpleJekyllSearch.search(document.getElementById('search-input').value);
  };
</script>