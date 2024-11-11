
        <span class=<span class="string">"keyword"</span>>const</span> unitToggle = document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;input[name=&quot;unit&quot;]&#<span class=<span class="string">"number"</span>>039</span>;);
        <span class=<span class="string">"keyword"</span>>const</span> unitLabels = document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.unit-label&#<span class=<span class="string">"number"</span>>039</span>;);
        <span class=<span class="string">"keyword"</span>>const</span> distanceInput = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;distance&#<span class=<span class="string">"number"</span>>039</span>;);
        <span class=<span class="string">"keyword"</span>>const</span> elevationInput = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;elevation&#<span class=<span class="string">"number"</span>>039</span>;);
        <span class=<span class="string">"keyword"</span>>const</span> weightInput = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;weight&#<span class=<span class="string">"number"</span>>039</span>;);
        <span class=<span class="string">"keyword"</span>>const</span> temperatureInput = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;temperature&#<span class=<span class="string">"number"</span>>039</span>;);

        <span class=<span class="string">"keyword"</span>>function</span> updateUnits(toImperial) {
            <span class=<span class="string">"keyword"</span>>if</span> (toImperial) {
                unitLabels[<span class=<span class="string">"number"</span>>0</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;miles&#<span class=<span class="string">"number"</span>>039</span>;;
                unitLabels[<span class=<span class="string">"number"</span>>1</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;ft&#<span class=<span class="string">"number"</span>>039</span>;;
                unitLabels[<span class=<span class="string">"number"</span>>2</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;lbs&#<span class=<span class="string">"number"</span>>039</span>;;
                unitLabels[<span class=<span class="string">"number"</span>>3</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;°F&#<span class=<span class="string">"number"</span>>039</span>;;
                distanceInput.value = (parseFloat(distanceInput.value) * <span class=<span class="string">"number"</span>>0</span>.<span class=<span class="string">"number"</span>>621371</span>).toFixed(<span class=<span class="string">"number"</span>>2</span>);
                elevationInput.value = (parseFloat(elevationInput.value) * <span class=<span class="string">"number"</span>>3</span>.<span class=<span class="string">"number"</span>>28084</span>).toFixed(<span class=<span class="string">"number"</span>>0</span>);
                weightInput.value = (parseFloat(weightInput.value) * <span class=<span class="string">"number"</span>>2</span>.<span class=<span class="string">"number"</span>>20462</span>).toFixed(<span class=<span class="string">"number"</span>>1</span>);
                temperatureInput.value = (parseFloat(temperatureInput.value) * <span class=<span class="string">"number"</span>>9</span>/<span class=<span class="string">"number"</span>>5</span> + <span class=<span class="string">"number"</span>>32</span>).toFixed(<span class=<span class="string">"number"</span>>1</span>);
            } <span class=<span class="string">"keyword"</span>>else</span> {
                unitLabels[<span class=<span class="string">"number"</span>>0</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;km&#<span class=<span class="string">"number"</span>>039</span>;;
                unitLabels[<span class=<span class="string">"number"</span>>1</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;m&#<span class=<span class="string">"number"</span>>039</span>;;
                unitLabels[<span class=<span class="string">"number"</span>>2</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;kg&#<span class=<span class="string">"number"</span>>039</span>;;
                unitLabels[<span class=<span class="string">"number"</span>>3</span>].textContent = &#<span class=<span class="string">"number"</span>>039</span>;°C&#<span class=<span class="string">"number"</span>>039</span>;;
                distanceInput.value = (parseFloat(distanceInput.value) / <span class=<span class="string">"number"</span>>0</span>.<span class=<span class="string">"number"</span>>621371</span>).toFixed(<span class=<span class="string">"number"</span>>2</span>);
                elevationInput.value = (parseFloat(elevationInput.value) / <span class=<span class="string">"number"</span>>3</span>.<span class=<span class="string">"number"</span>>28084</span>).toFixed(<span class=<span class="string">"number"</span>>0</span>);
                weightInput.value = (parseFloat(weightInput.value) / <span class=<span class="string">"number"</span>>2</span>.<span class=<span class="string">"number"</span>>20462</span>).toFixed(<span class=<span class="string">"number"</span>>1</span>);
                temperatureInput.value = ((parseFloat(temperatureInput.value) - <span class=<span class="string">"number"</span>>32</span>) * <span class=<span class="string">"number"</span>>5</span>/<span class=<span class="string">"number"</span>>9</span>).toFixed(<span class=<span class="string">"number"</span>>1</span>);
            }
        }

        unitToggle.<span class=<span class="string">"keyword"</span>>for</span>Each(radio =&gt; {
            radio.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;change&#<span class=<span class="string">"number"</span>>039</span>;, (e) =&gt; {
                updateUnits(e.target.value === &#<span class=<span class="string">"number"</span>>039</span>;imperial&#<span class=<span class="string">"number"</span>>039</span>;);
            });
        });

        document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.duration-field&#<span class=<span class="string">"number"</span>>039</span>;).<span class=<span class="string">"keyword"</span>>for</span>Each(field =&gt; {
            <span class=<span class="string">"keyword"</span>>const</span> input = field.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;input&#<span class=<span class="string">"number"</span>>039</span>;);
            <span class=<span class="string">"keyword"</span>>if</span> (input.id === &#<span class=<span class="string">"number"</span>>039</span>;duration-hours&#<span class=<span class="string">"number"</span>>039</span>;) {
                field.setAttribute(&#<span class=<span class="string">"number"</span>>039</span>;data-unit&#<span class=<span class="string">"number"</span>>039</span>;, &#<span class=<span class="string">"number"</span>>039</span>;hrs&#<span class=<span class="string">"number"</span>>039</span>;);
            } <span class=<span class="string">"keyword"</span>>else</span> <span class=<span class="string">"keyword"</span>>if</span> (input.id === &#<span class=<span class="string">"number"</span>>039</span>;duration-minutes&#<span class=<span class="string">"number"</span>>039</span>;) {
                field.setAttribute(&#<span class=<span class="string">"number"</span>>039</span>;data-unit&#<span class=<span class="string">"number"</span>>039</span>;, &#<span class=<span class="string">"number"</span>>039</span>;min&#<span class=<span class="string">"number"</span>>039</span>;);
            }
        });

        document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;hydrationForm&#<span class=<span class="string">"number"</span>>039</span>;).addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;submit&#<span class=<span class="string">"number"</span>>039</span>;, <span class=<span class="string">"keyword"</span>>function</span>(e) {
            e.preventDefault();
    
            <span class=<span class="string">"keyword"</span>>const</span> hours = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;duration-hours&#<span class=<span class="string">"number"</span>>039</span>;).value || <span class=<span class="string">"number"</span>>0</span>);
            <span class=<span class="string">"keyword"</span>>const</span> minutes = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;duration-minutes&#<span class=<span class="string">"number"</span>>039</span>;).value || <span class=<span class="string">"number"</span>>0</span>);
            <span class=<span class="string">"keyword"</span>>const</span> duration = hours + (minutes / <span class=<span class="string">"number"</span>>60</span>);

            <span class=<span class="string">"keyword"</span>>const</span> isImperial = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;input[name=&quot;unit&quot;]:checked&#<span class=<span class="string">"number"</span>>039</span>;).value === &#<span class=<span class="string">"number"</span>>039</span>;imperial&#<span class=<span class="string">"number"</span>>039</span>;;
            <span class=<span class="string">"keyword"</span>>const</span> distance = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;distance&#<span class=<span class="string">"number"</span>>039</span>;).value);
            <span class=<span class="string">"keyword"</span>>const</span> temperature = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;temperature&#<span class=<span class="string">"number"</span>>039</span>;).value);
            <span class=<span class="string">"keyword"</span>>const</span> humidity = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;humidity&#<span class=<span class="string">"number"</span>>039</span>;).value) || <span class=<span class="string">"number"</span>>50</span>; 
            <span class=<span class="string">"keyword"</span>>const</span> elevation = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;elevation&#<span class=<span class="string">"number"</span>>039</span>;).value);
            <span class=<span class="string">"keyword"</span>>const</span> weight = parseFloat(document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;weight&#<span class=<span class="string">"number"</span>>039</span>;).value);

            <span class=<span class="string">"keyword"</span>>const</span> distanceKm = isImperial ? distance * <span class=<span class="string">"number"</span>>1</span>.<span class=<span class="string">"number"</span>>60934</span> : distance;
            <span class=<span class="string">"keyword"</span>>const</span> tempC = isImperial ? (temperature - <span class=<span class="string">"number"</span>>32</span>) * <span class=<span class="string">"number"</span>>5</span>/<span class=<span class="string">"number"</span>>9</span> : temperature;
            <span class=<span class="string">"keyword"</span>>const</span> elevationM = isImperial ? elevation * <span class=<span class="string">"number"</span>>0</span>.<span class=<span class="string">"number"</span>>3048</span> : elevation;
            <span class=<span class="string">"keyword"</span>>const</span> weightKg = isImperial ? weight * <span class=<span class="string">"number"</span>>0</span>.<span class=<span class="string">"number"</span>>453592</span> : weight;

            <span class=<span class="string">"keyword"</span>>let</span> baseRate = <span class=<span class="string">"number"</span>>500</span>;

            <span class=<span class="string">"keyword"</span>>if</span> (tempC &gt; <span class=<span class="string">"number"</span>>20</span>) baseRate += (tempC - <span class=<span class="string">"number"</span>>20</span>) * <span class=<span class="string">"number"</span>>15</span>;
            <span class=<span class="string">"keyword"</span>>if</span> (humidity &gt; <span class=<span class="string">"number"</span>>50</span>) baseRate += (humidity - <span class=<span class="string">"number"</span>>50</span>) * <span class=<span class="string">"number"</span>>3</span>;
            baseRate *= (<span class=<span class="string">"number"</span>>1</span> + (elevationM / <span class=<span class="string">"number"</span>>1000</span>) * <span class=<span class="string">"number"</span>>0</span>.<span class=<span class="string">"number"</span>>05</span>);
            baseRate *= (weightKg / <span class=<span class="string">"number"</span>>70</span>);

            <span class=<span class="string">"keyword"</span>>const</span> totalHydration = baseRate * duration;
            <span class=<span class="string">"keyword"</span>>const</span> hourlyRate = baseRate;

            <span class=<span class="string">"keyword"</span>>const</span> sodiumPerHour = Math.round((hourlyRate / <span class=<span class="string">"number"</span>>1000</span>) * <span class=<span class="string">"number"</span>>500</span>);
            <span class=<span class="string">"keyword"</span>>const</span> potassiumPerHour = Math.round((hourlyRate / <span class=<span class="string">"number"</span>>1000</span>) * <span class=<span class="string">"number"</span>>200</span>);
            <span class=<span class="string">"keyword"</span>>const</span> magnesiumPerHour = Math.round((hourlyRate / <span class=<span class="string">"number"</span>>1000</span>) * <span class=<span class="string">"number"</span>>25</span>);
            <span class=<span class="string">"keyword"</span>>const</span> calciumPerHour = Math.round((hourlyRate / <span class=<span class="string">"number"</span>>1000</span>) * <span class=<span class="string">"number"</span>>15</span>); 

            <span class=<span class="string">"keyword"</span>>const</span> totalDuration = duration; 
            <span class=<span class="string">"keyword"</span>>const</span> sodiumTotal = Math.round(sodiumPerHour * totalDuration);
            <span class=<span class="string">"keyword"</span>>const</span> potassiumTotal = Math.round(potassiumPerHour * totalDuration);
            <span class=<span class="string">"keyword"</span>>const</span> magnesiumTotal = Math.round(magnesiumPerHour * totalDuration);
            <span class=<span class="string">"keyword"</span>>const</span> calciumTotal = Math.round(calciumPerHour * totalDuration);

            <span class=<span class="string">"keyword"</span>>const</span> result = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;result&#<span class=<span class="string">"number"</span>>039</span>;);
            <span class=<span class="string">"keyword"</span>>const</span> recommendation = document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;hydrationRecommendation&#<span class=<span class="string">"number"</span>>039</span>;);
            <span class=<span class="string">"keyword"</span>>const</span> totalLiters = totalHydration / <span class=<span class="string">"number"</span>>1000</span>;
            <span class=<span class="string">"keyword"</span>>const</span> totalOz = totalLiters * <span class=<span class="string">"number"</span>>33</span>.<span class=<span class="string">"number"</span>>814</span>;
            <span class=<span class="string">"keyword"</span>>const</span> hourlyOz = hourlyRate / <span class=<span class="string">"number"</span>>29</span>.<span class=<span class="string">"number"</span>>5735</span>;

            <span class=<span class="string">"keyword"</span>>const</span> lang = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.language-button.active&#<span class=<span class="string">"number"</span>>039</span>;).dataset.lang;

            <span class=<span class="string">"keyword"</span>>function</span> <span class=<span class="string">"keyword"</span>>for</span>matHydrationValue(value, unit, isImperial, lang) {
                <span class=<span class="string">"keyword"</span>>if</span> (unit.includes(&#<span class=<span class="string">"number"</span>>039</span>;ml&#<span class=<span class="string">"number"</span>>039</span>;)) {
                    <span class=<span class="string">"keyword"</span>>return</span> `${Math.round(value)} ml`;
                }
                <span class=<span class="string">"keyword"</span>>if</span> (lang === &#<span class=<span class="string">"number"</span>>039</span>;fr&#<span class=<span class="string">"number"</span>>039</span>;) {
                    <span class=<span class="string">"keyword"</span>>return</span> `${Math.round(value).toString().replace(&#<span class=<span class="string">"number"</span>>039</span>;.&#<span class=<span class="string">"number"</span>>039</span>;, &#<span class=<span class="string">"number"</span>>039</span>;,&#<span class=<span class="string">"number"</span>>039</span>;)} ${unit}`;
                }
                <span class=<span class="string">"keyword"</span>>return</span> `${Math.round(value)} ${unit}`;
            }

            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;totalFluidIntake&#<span class=<span class="string">"number"</span>>039</span>;).innerHTML = 
                `${<span class=<span class="string">"keyword"</span>>for</span>matHydrationValue(totalHydration, &#<span class=<span class="string">"number"</span>>039</span>;ml&#<span class=<span class="string">"number"</span>>039</span>;, isImperial, lang)} (${totalLiters.toFixed(<span class=<span class="string">"number"</span>>2</span>).replace(&#<span class=<span class="string">"number"</span>>039</span>;.&#<span class=<span class="string">"number"</span>>039</span>;, &#<span class=<span class="string">"number"</span>>039</span>;,&#<span class=<span class="string">"number"</span>>039</span>;)} litres)${
                    isImperial ? ` or ${Math.round(totalOz)} fl oz` : &#<span class=<span class="string">"number"</span>>039</span>;&#<span class=<span class="string">"number"</span>>039</span>;
                }`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;hourlyFluidIntake&#<span class=<span class="string">"number"</span>>039</span>;).innerHTML = 
                `${<span class=<span class="string">"keyword"</span>>for</span>matHydrationValue(hourlyRate, &#<span class=<span class="string">"number"</span>>039</span>;ml&#<span class=<span class="string">"number"</span>>039</span>;, isImperial, lang)}${
                    isImperial ? ` or ${hourlyOz.toFixed(<span class=<span class="string">"number"</span>>1</span>).replace(&#<span class=<span class="string">"number"</span>>039</span>;.&#<span class=<span class="string">"number"</span>>039</span>;, &#<span class=<span class="string">"number"</span>>039</span>;,&#<span class=<span class="string">"number"</span>>039</span>;)} fl oz` : &#<span class=<span class="string">"number"</span>>039</span>;&#<span class=<span class="string">"number"</span>>039</span>;
                }`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;sodiumPerHour&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${sodiumPerHour} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;sodiumTotal&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${sodiumTotal} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;potassiumPerHour&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${potassiumPerHour} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;potassiumTotal&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${potassiumTotal} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;magnesiumPerHour&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${magnesiumPerHour} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;magnesiumTotal&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${magnesiumTotal} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;calciumPerHour&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${calciumPerHour} mg`;
            document.getElementById(&#<span class=<span class="string">"number"</span>>039</span>;calciumTotal&#<span class=<span class="string">"number"</span>>039</span>;).textContent = `${calciumTotal} mg`;

            result.classList.remove(&#<span class=<span class="string">"number"</span>>039</span>;hidden&#<span class=<span class="string">"number"</span>>039</span>;);
            result.classList.add(&#<span class=<span class="string">"number"</span>>039</span>;show&#<span class=<span class="string">"number"</span>>039</span>;);
        });

        <span class=<span class="string">"keyword"</span>>function</span> copyResults() {
            <span class=<span class="string">"keyword"</span>>const</span> resultTable = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.electrolyte-table&#<span class=<span class="string">"number"</span>>039</span>;);
            
            <span class=<span class="string">"keyword"</span>>let</span> text = &#<span class=<span class="string">"number"</span>>039</span>;&#<span class=<span class="string">"number"</span>>039</span>;;
            <span class=<span class="string">"keyword"</span>>const</span> rows = resultTable.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;tr&#<span class=<span class="string">"number"</span>>039</span>;);
            rows.<span class=<span class="string">"keyword"</span>>for</span>Each(row =&gt; {
                <span class=<span class="string">"keyword"</span>>const</span> cells = row.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;th, td&#<span class=<span class="string">"number"</span>>039</span>;);
                <span class=<span class="string">"keyword"</span>>const</span> rowData = Array.from(cells)
                    .map(cell =&gt; cell.textContent.trim())
                    .join(&#<span class=<span class="string">"number"</span>>039</span>;\t&#<span class=<span class="string">"number"</span>>039</span>;);
                text += rowData + &#<span class=<span class="string">"number"</span>>039</span>;\n&#<span class=<span class="string">"number"</span>>039</span>;;
            });
            
            <span class=<span class="string">"keyword"</span>>const</span> textarea = document.createElement(&#<span class=<span class="string">"number"</span>>039</span>;textarea&#<span class=<span class="string">"number"</span>>039</span>;);
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand(&#<span class=<span class="string">"number"</span>>039</span>;copy&#<span class=<span class="string">"number"</span>>039</span>;);
                <span class=<span class="string">"keyword"</span>>const</span> copyButton = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.copy-button&#<span class=<span class="string">"number"</span>>039</span>;);
                <span class=<span class="string">"keyword"</span>>const</span> originalIcon = copyButton.innerHTML;
                copyButton.innerHTML = &#<span class=<span class="string">"number"</span>>039</span>;&lt;i class=&quot;fas fa-check&quot;&gt;&lt;/i&gt; Copied!&#<span class=<span class="string">"number"</span>>039</span>;;
                setTimeout(() =&gt; {
                    copyButton.innerHTML = originalIcon;
                }, <span class=<span class="string">"number"</span>>2000</span>);
            } catch(err) {
                console.error(&#<span class=<span class="string">"number"</span>>039</span>;Failed to copy text: &#<span class=<span class="string">"number"</span>>039</span>;, err);
            }
            
            document.body.removeChild(textarea);
        }

        <span class=<span class="string">"keyword"</span>>function</span> downloadXLS() {
            <span class=<span class="string">"keyword"</span>>const</span> resultTable = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.electrolyte-table&#<span class=<span class="string">"number"</span>>039</span>;);
            <span class=<span class="string">"keyword"</span>>let</span> csv = &#<span class=<span class="string">"number"</span>>039</span>;&#<span class=<span class="string">"number"</span>>039</span>;;
            <span class=<span class="string">"keyword"</span>>const</span> rows = resultTable.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;tr&#<span class=<span class="string">"number"</span>>039</span>;);
            
            rows.<span class=<span class="string">"keyword"</span>>for</span>Each(row =&gt; {
                <span class=<span class="string">"keyword"</span>>const</span> cells = row.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;th, td&#<span class=<span class="string">"number"</span>>039</span>;);
                <span class=<span class="string">"keyword"</span>>const</span> rowData = Array.from(cells)
                    .map(cell =&gt; `&quot;${cell.textContent.trim()}&quot;`)
                    .join(&#<span class=<span class="string">"number"</span>>039</span>;,&#<span class=<span class="string">"number"</span>>039</span>;);
                csv += rowData + &#<span class=<span class="string">"number"</span>>039</span>;\n&#<span class=<span class="string">"number"</span>>039</span>;;
            });
            
            <span class=<span class="string">"keyword"</span>>const</span> blob = new Blob([csv], { type: &#<span class=<span class="string">"number"</span>>039</span>;text/csv;charset=utf-<span class=<span class="string">"number"</span>>8</span>;&#<span class=<span class="string">"number"</span>>039</span>; });
            <span class=<span class="string">"keyword"</span>>const</span> link = document.createElement(&#<span class=<span class="string">"number"</span>>039</span>;a&#<span class=<span class="string">"number"</span>>039</span>;);
            <span class=<span class="string">"keyword"</span>>const</span> url = URL.createObjectURL(blob);
            link.setAttribute(&#<span class=<span class="string">"number"</span>>039</span>;href&#<span class=<span class="string">"number"</span>>039</span>;, url);
            link.setAttribute(&#<span class=<span class="string">"number"</span>>039</span>;download&#<span class=<span class="string">"number"</span>>039</span>;, &#<span class=<span class="string">"number"</span>>039</span>;hydration_plan.csv&#<span class=<span class="string">"number"</span>>039</span>;);
            link.style.visibility = &#<span class=<span class="string">"number"</span>>039</span>;hidden&#<span class=<span class="string">"number"</span>>039</span>;;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.language-button&#<span class=<span class="string">"number"</span>>039</span>;).<span class=<span class="string">"keyword"</span>>for</span>Each(button =&gt; {
            button.addEventListener(&#<span class=<span class="string">"number"</span>>039</span>;click&#<span class=<span class="string">"number"</span>>039</span>;, (e) =&gt; {
                <span class=<span class="string">"keyword"</span>>const</span> lang = button.dataset.lang;
                document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.language-button&#<span class=<span class="string">"number"</span>>039</span>;).<span class=<span class="string">"keyword"</span>>for</span>Each(btn =&gt; {
                    btn.classList.remove(&#<span class=<span class="string">"number"</span>>039</span>;active&#<span class=<span class="string">"number"</span>>039</span>;);
                });
                button.classList.add(&#<span class=<span class="string">"number"</span>>039</span>;active&#<span class=<span class="string">"number"</span>>039</span>;);
                updateLanguage(lang);
            });
        });

        <span class=<span class="string">"keyword"</span>>const</span> translations = {
            en: {
                title: &quot;Hydration Planner&quot;,
                intro: &quot;Plan your hydration strategy <span class=<span class="string">"keyword"</span>>for</span> your next trail run with this interactive tool. Enter your run details and personal factors to receive a customized hydration recommendation.&quot;,
                distance: &quot;Run Distance&quot;,
                elevation: &quot;Elevation Gain&quot;,
                duration: &quot;Estimated Duration&quot;,
                weight: &quot;Body Weight&quot;,
                temperature: &quot;Temperature&quot;,
                humidity: &quot;Relative Humidity&quot;,
                calculate: &quot;Calculate Hydration Needs&quot;,
                hydrationPlan: &quot;Your Hydration Plan&quot;,
                fluidIntakeSection: &quot;Water Intake&quot;,
                electrolyteIntakeSection: &quot;Electrolyte Intake&quot;,
                fluidsRow: &quot;Water&quot;,
                sodiumRow: &quot;Sodium&quot;,
                potassiumRow: &quot;Potassium&quot;,
                magnesiumRow: &quot;Magnesium&quot;,
                calciumRow: &quot;Calcium&quot;,
                typeHeader: &quot;Type&quot;,
                perHourHeader: &quot;Per Hour&quot;,
                totalHeader: &quot;Total&quot;,
                waterIntakeHeader: &quot;Water Intake&quot;,
                electrolyteIntakeHeader: &quot;Electrolyte Intake&quot;,
                reminder: &quot;Remember to start your run well-hydrated and adjust your intake based on how you feel during the run.&quot;,
                needWeather: &quot;Need current temperature data?&quot;,
                needHumidity: &quot;Need current humidity data?&quot;,
                checkWeather: &quot;Check Weather.com&quot;,
                copyButton: &quot;Copy to clipboard&quot;,
                downloadButton: &quot;Download .csv&quot;,
                hourUnit: &quot;hour&quot;, 
                waterRow: &quot;Water&quot;,
                icons: {
                    sodium: &#<span class=<span class="string">"number"</span>>039</span>;cube&#<span class=<span class="string">"number"</span>>039</span>;,
                    potassium: &#<span class=<span class="string">"number"</span>>039</span>;leaf&#<span class=<span class="string">"number"</span>>039</span>;,
                    magnesium: &#<span class=<span class="string">"number"</span>>039</span>;vial&#<span class=<span class="string">"number"</span>>039</span>;,
                    calcium: &#<span class=<span class="string">"number"</span>>039</span>;bone&#<span class=<span class="string">"number"</span>>039</span>;
                }
            },
            fr: {
                title: &quot;Plan<span class=<span class="string">"keyword"</span>>if</span>icateur d&#<span class=<span class="string">"number"</span>>039</span>;Hydratation&quot;,
                intro: &quot;Plan<span class=<span class="string">"keyword"</span>>if</span>iez votre stratégie d&#<span class=<span class="string">"number"</span>>039</span>;hydratation pour votre prochaine course avec cet outil interact<span class=<span class="string">"keyword"</span>>if</span>. Entrez les détails de votre course et vos facteurs personnels pour recevoir une recommandation d&#<span class=<span class="string">"number"</span>>039</span>;hydratation personnalisée.&quot;,
                distance: &quot;Distance de course&quot;,
                elevation: &quot;Dénivelé&quot;,
                duration: &quot;Durée estimée&quot;,
                weight: &quot;Poids corporel&quot;,
                temperature: &quot;Température&quot;,
                humidity: &quot;Humidité relative&quot;,
                calculate: &quot;Calculer les besoins en hydratation&quot;,
                hydrationPlan: &quot;Votre Plan d&#<span class=<span class="string">"number"</span>>039</span>;Hydratation&quot;,
                fluidIntakeSection: &quot;Apport en Eau&quot;,
                electrolyteIntakeSection: &quot;Apport en Électrolytes&quot;,
                fluidsRow: &quot;Eau&quot;,
                sodiumRow: &quot;Sodium&quot;,
                potassiumRow: &quot;Potassium&quot;,
                magnesiumRow: &quot;Magnésium&quot;,
                calciumRow: &quot;Calcium&quot;,
                typeHeader: &quot;Type&quot;,
                perHourHeader: &quot;Par Heure&quot;,
                totalHeader: &quot;Total&quot;,
                waterIntakeHeader: &quot;Apport en Eau&quot;,
                electrolyteIntakeHeader: &quot;Apport en Électrolytes&quot;,
                reminder: &quot;N&#<span class=<span class="string">"number"</span>>039</span>;oubliez pas de commencer votre course bien hydraté et d&#<span class=<span class="string">"number"</span>>039</span>;ajuster votre consommation en fonction de vos sensations pendant la course.&quot;,
                needWeather: &quot;Besoin des données de température actuelles ?&quot;,
                needHumidity: &quot;Besoin des données d&#<span class=<span class="string">"number"</span>>039</span>;humidité actuelles ?&quot;,
                checkWeather: &quot;Consulter Weather.com&quot;,
                copyButton: &quot;Copier dans le presse-papiers&quot;,
                downloadButton: &quot;Télécharger .csv&quot;,
                hourUnit: &quot;heure&quot;, 
                waterRow: &quot;Eau&quot;,
                icons: {
                    sodium: &#<span class=<span class="string">"number"</span>>039</span>;cube&#<span class=<span class="string">"number"</span>>039</span>;,
                    potassium: &#<span class=<span class="string">"number"</span>>039</span>;leaf&#<span class=<span class="string">"number"</span>>039</span>;,
                    magnesium: &#<span class=<span class="string">"number"</span>>039</span>;vial&#<span class=<span class="string">"number"</span>>039</span>;,
                    calcium: &#<span class=<span class="string">"number"</span>>039</span>;bone&#<span class=<span class="string">"number"</span>>039</span>;
                }
            }
        };

        <span class=<span class="string">"keyword"</span>>function</span> updateLanguage(lang) {
            <span class=<span class="string">"keyword"</span>>const</span> elements = {
                title: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;h<span class=<span class="string">"number"</span>>2</span>&#<span class=<span class="string">"number"</span>>039</span>;),
                intro: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;main &gt; p&#<span class=<span class="string">"number"</span>>039</span>;),
                distanceLabel: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;label[<span class=<span class="string">"keyword"</span>>for</span>=&quot;distance&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                elevationLabel: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;label[<span class=<span class="string">"keyword"</span>>for</span>=&quot;elevation&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                durationLabel: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;label[<span class=<span class="string">"keyword"</span>>for</span>=&quot;duration&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                weightLabel: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;label[<span class=<span class="string">"keyword"</span>>for</span>=&quot;weight&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                temperatureLabel: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;label[<span class=<span class="string">"keyword"</span>>for</span>=&quot;temperature&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                humidityLabel: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;label[<span class=<span class="string">"keyword"</span>>for</span>=&quot;humidity&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                calculateButton: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;button[type=&quot;submit&quot;]&#<span class=<span class="string">"number"</span>>039</span>;),
                resultTitle: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;#result h<span class=<span class="string">"number"</span>>3</span>&#<span class=<span class="string">"number"</span>>039</span>;),
                resultReminder: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;#result p&#<span class=<span class="string">"number"</span>>039</span>;),
                copyButton: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.copy-button&#<span class=<span class="string">"number"</span>>039</span>;),
                downloadButton: document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.copy-button:last-child&#<span class=<span class="string">"number"</span>>039</span>;)
            };

            <span class=<span class="string">"keyword"</span>>if</span> (elements.title) elements.title.innerHTML = `&lt;i class=&quot;fas fa-tint&quot;&gt;&lt;/i&gt; ${translations[lang].title}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.intro) elements.intro.textContent = translations[lang].intro;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.distanceLabel) elements.distanceLabel.innerHTML = `&lt;i class=&quot;fas fa-route&quot;&gt;&lt;/i&gt; ${translations[lang].distance}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.elevationLabel) elements.elevationLabel.innerHTML = `&lt;i class=&quot;fas fa-mountain&quot;&gt;&lt;/i&gt; ${translations[lang].elevation}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.durationLabel) elements.durationLabel.innerHTML = `&lt;i class=&quot;fas fa-clock&quot;&gt;&lt;/i&gt; ${translations[lang].duration}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.weightLabel) elements.weightLabel.innerHTML = `&lt;i class=&quot;fas fa-weight&quot;&gt;&lt;/i&gt; ${translations[lang].weight}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.temperatureLabel) elements.temperatureLabel.innerHTML = `&lt;i class=&quot;fas fa-thermometer-half&quot;&gt;&lt;/i&gt; ${translations[lang].temperature}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.humidityLabel) elements.humidityLabel.innerHTML = `&lt;i class=&quot;fas fa-tint&quot;&gt;&lt;/i&gt; ${translations[lang].humidity}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.calculateButton) elements.calculateButton.textContent = translations[lang].calculate;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.resultTitle) elements.resultTitle.innerHTML = `&lt;i class=&quot;fas fa-tint&quot;&gt;&lt;/i&gt; ${translations[lang].hydrationPlan}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.resultReminder) elements.resultReminder.textContent = translations[lang].reminder;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.copyButton) elements.copyButton.innerHTML = `&lt;i class=&quot;fas fa-copy&quot;&gt;&lt;/i&gt; ${translations[lang].copyButton}`;
            <span class=<span class="string">"keyword"</span>>if</span> (elements.downloadButton) elements.downloadButton.innerHTML = `&lt;i class=&quot;fas fa-file-excel&quot;&gt;&lt;/i&gt; ${translations[lang].downloadButton}`;

            document.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.help-text&#<span class=<span class="string">"number"</span>>039</span>;).<span class=<span class="string">"keyword"</span>>for</span>Each((helpText, index) =&gt; {
                <span class=<span class="string">"keyword"</span>>if</span> (helpText) {
                    <span class=<span class="string">"keyword"</span>>const</span> text = index === <span class=<span class="string">"number"</span>>0</span> ? translations[lang].needWeather : translations[lang].needHumidity;
                    helpText.innerHTML = `${text} &lt;a href=&quot;https:<span class="comment">//weather.com/fr-FR/temps/<span class=<span class="string">"number"</span>>10</span>jours/l/<span class=<span class="string">"number"</span>>9099</span>c<span class=<span class="string">"number"</span>>1</span>b<span class=<span class="string">"number"</span>>5627805345616709675</span>ec<span class=<span class="string">"number"</span>>5798</span>c<span class=<span class="string">"number"</span>>45</span>bbeea<span class=<span class="string">"number"</span>>4662</span>bf<span class=<span class="string">"number"</span>>7860</span>e<span class=<span class="string">"number"</span>>0</span>d<span class=<span class="string">"number"</span>>65</span>f<span class=<span class="string">"number"</span>>5</span>b<span class=<span class="string">"number"</span>>8</span>e<span class=<span class="string">"number"</span>>6</span>ba<span class=<span class="string">"number"</span>>9</span>&quot; target=&quot;_blank&quot;&gt;${translations[lang].checkWeather} &lt;i class=&quot;fas fa-external-link-alt&quot;&gt;&lt;/i&gt;&lt;/a&gt;`;</span>
                }
            });

            <span class=<span class="string">"keyword"</span>>const</span> table = document.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;.electrolyte-table&#<span class=<span class="string">"number"</span>>039</span>;);
            <span class=<span class="string">"keyword"</span>>if</span> (table) {
                <span class=<span class="string">"keyword"</span>>const</span> sectionHeaders = table.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;.section-header th&#<span class=<span class="string">"number"</span>>039</span>;);
                <span class=<span class="string">"keyword"</span>>if</span> (sectionHeaders.length &gt;= <span class=<span class="string">"number"</span>>2</span>) {
                    sectionHeaders[<span class=<span class="string">"number"</span>>0</span>].textContent = translations[lang].waterIntakeHeader;
                    sectionHeaders[<span class=<span class="string">"number"</span>>1</span>].textContent = translations[lang].electrolyteIntakeHeader;
                }

                <span class=<span class="string">"keyword"</span>>const</span> allColumnHeaders = table.querySelectorAll(&#<span class=<span class="string">"number"</span>>039</span>;tr:not(.section-header) th&#<span class=<span class="string">"number"</span>>039</span>;);
                allColumnHeaders.<span class=<span class="string">"keyword"</span>>for</span>Each(header =&gt; {
                    <span class=<span class="string">"keyword"</span>>if</span> (header.textContent.includes(&#<span class=<span class="string">"number"</span>>039</span>;Per Hour&#<span class=<span class="string">"number"</span>>039</span>;)) {
                        header.textContent = lang === &#<span class=<span class="string">"number"</span>>039</span>;fr&#<span class=<span class="string">"number"</span>>039</span>; ? translations[lang].perHourHeader : translations[lang].perHourHeader;
                    }
                });

                <span class=<span class="string">"keyword"</span>>const</span> rows = {
                    water: table.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;tr:nth-child(<span class=<span class="string">"number"</span>>4</span>) td:first-child&#<span class=<span class="string">"number"</span>>039</span>;),
                    sodium: table.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;tr:nth-child(<span class=<span class="string">"number"</span>>7</span>) td:first-child&#<span class=<span class="string">"number"</span>>039</span>;),
                    potassium: table.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;tr:nth-child(<span class=<span class="string">"number"</span>>8</span>) td:first-child&#<span class=<span class="string">"number"</span>>039</span>;),
                    magnesium: table.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;tr:nth-child(<span class=<span class="string">"number"</span>>9</span>) td:first-child&#<span class=<span class="string">"number"</span>>039</span>;),
                    calcium: table.querySelector(&#<span class=<span class="string">"number"</span>>039</span>;tr:nth-child(<span class=<span class="string">"number"</span>>10</span>) td:first-child&#<span class=<span class="string">"number"</span>>039</span>;)
                };

                <span class=<span class="string">"keyword"</span>>if</span> (rows.water) {
                    rows.water.innerHTML = `&lt;i class=&quot;fas fa-glass-water&quot;&gt;&lt;/i&gt; ${translations[lang].waterRow}`;
                }
                <span class=<span class="string">"keyword"</span>>if</span> (rows.sodium) {
                    rows.sodium.innerHTML = `&lt;i class=&quot;fas fa-${translations[lang].icons.sodium}&quot;&gt;&lt;/i&gt; ${translations[lang].sodiumRow}`;
                }
                <span class=<span class="string">"keyword"</span>>if</span> (rows.potassium) {
                    rows.potassium.innerHTML = `&lt;i class=&quot;fas fa-${translations[lang].icons.potassium}&quot;&gt;&lt;/i&gt; ${translations[lang].potassiumRow}`;
                }
                <span class=<span class="string">"keyword"</span>>if</span> (rows.magnesium) {
                    rows.magnesium.innerHTML = `&lt;i class=&quot;fas fa-${translations[lang].icons.magnesium}&quot;&gt;&lt;/i&gt; ${translations[lang].magnesiumRow}`;
                }
                <span class=<span class="string">"keyword"</span>>if</span> (rows.calcium) {
                    rows.calcium.innerHTML = `&lt;i class=&quot;fas fa-${translations[lang].icons.calcium}&quot;&gt;&lt;/i&gt; ${translations[lang].calciumRow}`;
                }
            }
        }

        updateLanguage(&#<span class=<span class="string">"number"</span>>039</span>;en&#<span class=<span class="string">"number"</span>>039</span>;);
    
