package com.ssafy.dmb.repository;


import com.ssafy.dmb.domain.plan.Bookmark;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class BookmarkRepository {

    private final EntityManager em;

    public Bookmark save(Bookmark bookmark) {

        em.persist(bookmark);
        return bookmark;
    }

    public Bookmark findOne(Long id) {
        return em.find(Bookmark.class, id);
    }

    public List<Bookmark> findByPlan(Long id) {
        return em.createQuery("select b from Bookmark b where b.plan.id =:id", Bookmark.class)
                .setParameter("id", id)
                .getResultList();
    }

    public List<Bookmark> findByAddress(String address) {
        return em.createQuery("select b from Bookmark b where b.bookmarkAddress =:address", Bookmark.class)
                .setParameter("address", address)
                .getResultList();
    }

    public void remove(Long id) {
        Bookmark bookmark = em.find(Bookmark.class, id);
        em.remove(bookmark);

    }

}
