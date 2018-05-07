let search;
let outputDiv = document.getElementById('output');
let searchButton = document.getElementById('search');
let resetButton = document.getElementById('reset');
let foundStudent = '';
let count = 0;
let _INIT = {
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
        },