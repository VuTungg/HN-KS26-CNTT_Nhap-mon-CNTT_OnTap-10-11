const danhSachModel = [
  { ma: "GPT-4O", ten: "OpenAI GPT-4o Omni", gia: 125000 },
  { ma: "CLAUDE-35", ten: "Anthropic Claude 3.5 Sonnet", gia: 150000 },
  { ma: "GEMINI-PRO", ten: "Google Gemini 2.5 Pro", gia: 90000 },
  { ma: "DEEPSEEK-R1", ten: "DeepSeek R1 Reasoning", gia: 55000 },
];

function hienThiBangModelAI() {
  const bang = document.getElementById("bang-model");
  for (const model of danhSachModel) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = model.ma;
    dong.insertCell().textContent = model.ten;
    dong.insertCell().textContent = model.gia.toLocaleString("vi-VN");
  }
}

hienThiBangModel();
