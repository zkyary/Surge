let obj = JSON.parse($response.body);

obj.data = obj.data.filter(t => t.layout !== "advert_self");
obj.data.forEach(t => {
    t.list = t.list.filter(t => t.type !== 3);
});

$done({body: JSON.stringify(obj)});
