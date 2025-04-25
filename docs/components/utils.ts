import { ElMessage } from "element-plus";

export const copyCode = async (meta: any) => {
  const textArea = document.createElement("textarea");
  textArea.value = `
      <${meta.name}>${meta.slot}</${meta.name}>
      `;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  ElMessage.success("复制成功");
};
