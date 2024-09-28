let command = "/var/lib/pufferpanel/binaries/depotdownloader/DepotDownloader -username CHANGEME -remember-password"
let modsIds = []
document.querySelectorAll('a').forEach(link => {
    const url = new URL(link.href);
    const id = url.searchParams.get('id');
    modsIds.push(id);
});
let commands = ""
modsIds.forEach(id => {
    commands += command + ` -app 221100 -pubfile ${id} && `
})
commands += `echo "all done"`
console.log(commands)