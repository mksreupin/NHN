<!--Set Indian Time-->
  <script>

document.addEventListener(&quot;DOMContentLoaded&quot;, function() {

  // सभ&#2368; elements ज&#2367;नम&#2375;&#2306; ISO8601 date ह&#2379; सकत&#2375; ह&#2376;&#2306;, पकड&#2364;&#2379;

  let timestamps = document.querySelectorAll(

    &quot;abbr.published[title], time[datetime], span.post-timestamp, span.comment-timestamp&quot;

  );

  timestamps.forEach(function(el) {

    // ISO date ल&#2379; (title, datetime य&#2366; innerText स&#2375;)

    let isoDate = el.getAttribute(&quot;title&quot;) || el.getAttribute(&quot;datetime&quot;) || el.textContent.trim();

    

    // अगर सह&#2368; ISO date ह&#2376; तभ&#2368; convert कर&#2379;

    if (isoDate &amp;&amp; !isNaN(Date.parse(isoDate))) {

      let date = new Date(isoDate);

      // Indian format options

      let options = { 

        day: &quot;2-digit&quot;, month: &quot;2-digit&quot;, year: &quot;numeric&quot;, 

        hour: &quot;2-digit&quot;, minute: &quot;2-digit&quot;, 

        hour12: true 

      };

      // Convert &amp; Replace

      el.textContent = date.toLocaleString(&quot;en-IN&quot;, options);

    }

  });

});

</script>
<!--End set indian time-->