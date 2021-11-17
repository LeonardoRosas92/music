const msToMm = {}

function convertMsToMs(ms){
    const min = Math.floor(ms/60000);
    const seg = ((ms%60000/1000).toFixed(0));
    return `${(min < 10) ? '0' + min : min}:${(seg < 10) ? '0' + seg : seg} min`;
}

msToMm.install = function (Vue) {
    Vue.filter('ms-to-mm', (val) => {
        return convertMsToMs(val)
    })
}

export default msToMm;