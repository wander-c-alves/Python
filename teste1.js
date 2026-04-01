/**
 * Teste de Script JS - Padrão Profissional
 * Verificando motor V8 no Mac Mini M4
 */

const verificarSetup = () => {
    const status = {
        node: process.version,
        plataforma: process.platform,
        maquina: "Mac Mini M4"
    };

    console.log("\n" + "=".repeat(40));
    console.log(" SETUP JAVASCRIPT ATIVO ".center(40));
    console.log("=".repeat(40));
    console.log(`[NODE]: ${status.node}`);
    console.log(`[SO]: ${status.plataforma}`);
    console.log(`[HARDWARE]: ${status.maquina}`);
    console.log("=".repeat(40) + "\n");
};

// Auxiliar para centralizar texto
String.prototype.center = function(width) {
    const pad = Math.max(0, width - this.length);
    return " ".repeat(Math.floor(pad / 2)) + this;
};

verificarSetup();