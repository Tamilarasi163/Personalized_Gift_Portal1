package com.newapp.demo.model;

// import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "gift")
public class Gift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "giftId", nullable = false)
    private Long giftid;
    @Column(name = "giftName", nullable = false)
    private String giftname;
    @Column(name = "giftDetails", nullable = false)
    private String giftDetails;
    @Column(name = "giftPrice", nullable = false)
    private Double giftPrice;
    @Column(name = "image")
    private String image;
    // // @OneToMany
    // //@JoinColumn(name="themes")
    // private List<Theme> themes;

}