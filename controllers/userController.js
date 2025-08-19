const db = require("../firebase/firebaseConfig");
const sampleData = require("../data/sampleData");


exports.getLocalUsers = (req, res) => {
  res.json(sampleData);
};

exports.getFirebaseUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    let users = [];
    snapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.json(users);
  } catch (err) {
    console.error("Erro ao buscar usuários do Firebase:", err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

exports.addFirebaseUser = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const newUser = await db.collection("users").doc(email).set({ nome, email });
    res.json({ message: `Usuário ${nome} adicionado com sucesso!` });
  } catch (err) {
    console.error("Erro ao adicionar usuário:", err);
    res.status(500).json({ error: "Erro ao adicionar usuário" });
  }
};

exports.pushUsersToFirebase = async (req, res) => {
  try {
    for (let user of sampleData) {
      await db.collection("users").doc(user.email).set({ nome: user.nome, email: user.email });
      console.log(`Usuário ${user.nome} enviado com sucesso!`);
    }
    res.json({ message: "Todos os usuários do JSON foram enviados para o Firebase com sucesso!" });
  } catch (err) {
    console.error("Erro ao enviar usuários:", err);
    res.status(500).json({ error: "Erro ao enviar usuários" });
  }
};

exports.getFirebaseUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    let users = [];
    snapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() }); 
    });
    res.json(users);
  } catch (err) {
    console.error("Erro ao buscar usuários do Firebase:", err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

