export const splitNamespace = (name: string) => {
    return "ar-" + name.split("/").pop()?.split(".")[0];
};

export const toCamelCase = (str: string) => {
    return str
        .split("-") // 将字符串按 '-' 分割成数组
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
        .join(""); // 将数组重新合并成字符串
};

export const setParts = (el: any) => {
    el.setAttribute('part', 'root');
    const nodes = el.querySelectorAll("*")!;

    // 给每个元素加上一个 part
    nodes.forEach((ele: any, index: number) => {
        
        if (ele.className && typeof ele.className == 'string') {
            return ele.setAttribute('part', ele.className.split(' ')[0]);
        }

        const tagName = ele.tagName.toLowerCase();
        
        ele.setAttribute("part", ele.className || `${tagName}-${index}`);
    });
}