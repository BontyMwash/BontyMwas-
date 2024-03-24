document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    const documentList = document.getElementById('documentList');
    const exitButton = document.getElementById('exitButton');

    // Simulating content loading delay with an increased timer to 5 seconds
    setTimeout(() => {
        splashScreen.style.display = 'none';
        documentList.style.display = 'block'; // Show the document list
        exitButton.style.display = 'block'; // Show the exit button
        loadDocuments(); // Call the function to load documents
    }, 5000); // 5000 milliseconds (5 seconds) delay for demonstration

    // Exit button functionality
    exitButton.addEventListener('click', () => {
        alert('Exiting the app');
        // Perform any cleanup or exit actions here
    });

    function loadDocuments() {
        // Logic to load documents here
        const documents = [
            { id: 1, name: 'Mathematics Study Materials', url: 'https://drive.google.com/file/d/1RJ0qYrDl-6XJ5nZPvPu1RFQx50s63mbq/view?usp=drivesdk' },
            { id: 2, name: 'COMPUTER FILES', url: 'https://drive.google.com/drive/folders/1DLOzAzV8ohC-6DEdkf_P33VMGgLh6ehe' },
            { id: 3, name: 'REVISION PAST PAPERS', url: 'https://drive.google.com/drive/folders/1P-nXgsORHqoZd8C133T5z-SDEVJeNMqS' },
            // Add more documents here
            { id: 4, name: 'PHYSICS FILES', url: 'https://drive.google.com/file/d/your-physics-file-id/view?usp=sharing' },
            { id: 5, name: 'CHEMISTRY FILES', url: 'https://drive.google.com/drive/folders/your-chemistry-folder-id' },
            { id: 6, name: 'BIOLOGY FILES', url: 'https://drive.google.com/drive/folders/your-biology-folder-id' }
        ];

        const documentListContainer = document.getElementById('documentList');
        documents.forEach(doc => {
            const listItem = document.createElement('li');
            const downloadButton = document.createElement('a');
            const buttonContainer = document.createElement('div');

            downloadButton.innerText = 'Download';
            downloadButton.href = doc.url;
            downloadButton.download = doc.name + '.pdf';

            buttonContainer.className = 'button-container';
            buttonContainer.appendChild(downloadButton);

            listItem.appendChild(document.createTextNode(doc.name));
            listItem.appendChild(buttonContainer);
            documentListContainer.appendChild(listItem);
        });
    }
});
