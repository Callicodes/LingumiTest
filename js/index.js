let search;
let outputDiv = document.getElementById('output');
let searchButton = document.getElementById('search');
let resetButton = document.getElementById('reset');
let foundStudent = '';
let count = 0;
let _INIT = {//NODE BUILDER
        table({item, key}) {
            count++;
            return `
            <tr id="${key}">
            <td>${count}</td>
            <td>${item.id}</tditem>
            <td>${item.hasAlreadyCollected}</td>
            <td>${item.numberOfTimesLearned}</td>
            <td>${item.Wordsticker}</td>
            <td><button onclick="_INIT.deleteRow(${key})">delete</button></td>
            </tr>
            `
        },//DELETE KEY
        deleteRow(key) {
            let tr = document.getElementById(key);
            outputDiv.removeChild(tr);
        },//PRINTING INFO TO THE PAGE
        print(student) {
            let reports;
            reports = this.table(student);
            outputDiv.innerHTML += reports;
        },

        //SOLUTION

        startSearching(foundStudent = '') {
            count = 0;
            while (true) {
                search = prompt('Search student records: type a id [Happy] (or type "quit" to end)\n' + foundStudent);
                if (search === null || search.toLowerCase() === 'quit') {
                    break;
                }
                words.map((i, k) => {
                    let obj = {item: i, key: k};
                    if (i.id.toLowerCase() === search.toLowerCase()) {
                        foundStudent += '-----\nfound student: ' + i.id + '\n hasAlreadyCollected: ' + i.hasAlreadyCollected + '\n ';
                        this.print(obj);
                    }
                })
            }
        }

    }
;//SEARCH FUNCTION
searchButton.addEventListener('click', () => {
    outputDiv.innerHTML = '';
    setTimeout(() => {
        _INIT.startSearching();
    }, 100);
});
//RESET FUNCTION

resetButton.addEventListener('click', () => {
    outputDiv.innerHTML = '';
});

/// START ////
_INIT.startSearching(foundStudent);
