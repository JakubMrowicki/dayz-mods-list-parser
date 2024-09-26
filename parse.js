let command = "/var/lib/pufferpanel/binaries/depotdownloader/DepotDownloader -username USERNAME -remember-password -password PASSWORD"
let modsIds = []
document.querySelectorAll('a').forEach(link => {
    const url = new URL(link.href);
    const id = url.searchParams.get('id');
    modsIds.push(id);
});
modsIds.forEach(id => {
    command += ` +workshop_download_item 221100 ${id}`
})
console.log(command)