import { sendMail } from '../servicos/api';

let projetosComEmailEnviado = JSON.parse(localStorage.getItem('projetosComEmailEnviado')) || {};

export function enviarEmailAlerta(projeto) {
    const limiteTemperatura = 85;
    const limiteCorrente = 10;
    const limiteVibracao = 15;
    const limiteRPM = 800;

    if (projeto.medidas && projeto.medidas.length > 0) {
        const ultimaMedida = projeto.medidas[projeto.medidas.length - 1];

        if (!projetosComEmailEnviado[projeto.nome] &&
            (ultimaMedida.temperatura > limiteTemperatura ||
             ultimaMedida.corrente > limiteCorrente ||
             ultimaMedida.vibracao > limiteVibracao ||
             ultimaMedida.rpm < limiteRPM)) {
            const emailData = {
                email: 'sensorsync.ptg@gmail.com',
                nome: 'SensoSync',
                mensagem: `!!!ATENÇÃO!!! 
O device ${projeto.nome} apresentou valores fora da faixa indicada. Por favor, investigue o que pode estar causando esse comportamento.`
            };
            sendMail(emailData);
            
            projetosComEmailEnviado[projeto.nome] = true;
            localStorage.setItem('projetosComEmailEnviado', JSON.stringify(projetosComEmailEnviado));
        } else if (ultimaMedida.temperatura <= limiteTemperatura &&
                   ultimaMedida.corrente <= limiteCorrente &&
                   ultimaMedida.vibracao <= limiteVibracao &&
                   ultimaMedida.rpm >= limiteRPM) {
            delete projetosComEmailEnviado[projeto.nome];
            localStorage.setItem('projetosComEmailEnviado', JSON.stringify(projetosComEmailEnviado));
        }
    }
}
