package app.service;

import app.dto.LivroDTO;
import app.entity.Livro;
import app.entity.Pessoa;
import app.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LivroService {

    @Autowired
    LivroRepository livroRepository;

    public List<LivroDTO> listAll(){
        List<Livro> lista = livroRepository.findAll();
        List<LivroDTO> listaDTO = new ArrayList<>();

        for (Livro livro : lista) listaDTO.add(this.toLivroDTO(livro));

        return listaDTO;
    }

    public LivroDTO save(LivroDTO livroDTO){
        Livro livro = this.toLivro(livroDTO);

        Livro livroSalvo = livroRepository.save(livro);

        return this.toLivroDTO(livroSalvo);
    }

    private LivroDTO toLivroDTO(Livro livro) {
        LivroDTO livroDTO = new LivroDTO();
        livroDTO.setId(livro.getId());
        livroDTO.setNome(livro.getNome());
        livroDTO.setAutor(livro.getAutor());
        return livroDTO;
    }

    private Livro toLivro(LivroDTO livroDTO) {
        Livro livro = new Livro();
        livro.setId(livroDTO.getId());
        livro.setNome(livroDTO.getNome());
        livro.setAutor(livroDTO.getAutor());
        return livro;
    }

    public void delete(Long id) {
        final Livro livroBanco = this.livroRepository.findById(id).orElse(null);
        this.livroRepository.delete(livroBanco);
    }
}
