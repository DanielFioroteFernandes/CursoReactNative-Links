import { useState, useEffect } from "react";
import { notaStorage, NotaStorage } from "@/storage/nota-storage";
/**
 * Hook personalizado para calcular o valor do serviço com base no valor do CTRC.
 * Aplica limites mínimos e máximos ao valor calculado.
 * @returns {object} - Contém o valor do CTRC, valor do serviço e uma função para atualizar o valor do CTRC.
 */
export function useCalculoServico() {
  const [valorCtrc, setValorCtrc] = useState("");
  const [valorServico, setValorServico] = useState("");
  const [isManualEdit, setIsManualEdit] = useState(false); // Flag para edição manual

  useEffect(() => {
    // Se não estiver em modo de edição manual, calcula o valor do serviço
    if (valorCtrc && !isManualEdit) {
      // Extrai o valor numérico do CTRC, ignorando caracteres não numéricos.
      const valorNumerico = parseFloat(
        valorCtrc.replace(/[^\d,]/g, "").replace(",", ".")
      );

      if (!isNaN(valorNumerico)) {
        let valorServicoCalculado = valorNumerico * 0.2; // Calcula 20% do valor

        // Aplica os limites mínimo (R$80) e máximo (R$320)
        if (valorServicoCalculado < 80) {
          valorServicoCalculado = 80;
        } else if (valorServicoCalculado > 320) {
          valorServicoCalculado = 320;
        }

        // Define o valor do serviço formatado com 2 casas decimais
        setValorServico(valorServicoCalculado.toFixed(2));
      }
    }
  }, [valorCtrc, isManualEdit]);

  // Função para alternar o estado de edição manual
  const updateValorServico = (valor: string) => {
    setIsManualEdit(true); // Marca que o valor está sendo editado manualmente
    setValorServico(valor);
  };

  // Função para redefinir o cálculo automático
  const resetCalculoServico = () => {
    setIsManualEdit(false); // Desativa a edição manual
  };

  return {
    valorCtrc,
    setValorCtrc,
    valorServico,
    updateValorServico,
    resetCalculoServico,
  };
}
