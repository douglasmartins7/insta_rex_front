#language: pt

Funcionalidade: Tela principal do instaRex
    Sendo um usuario
	
    Esquema do Cenário: Validar que consigo inserir uma foto, curtir, comentar e compartilhar

		E tenho fotos
        Quando escolho esses links para serem usados:
            | like          | coracao                     |
            | comentario    | opcao_do_que_quero_comentar |
            | Compartilhar  | opcao_de_compartilhamento   |
		E verifico as:
            | descricao | o_texto_que_explica_para_que_seria_a_foto |
		Então valido que tudo está certo
		
		