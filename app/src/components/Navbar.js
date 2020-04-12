import React, { Component } from 'react'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">jonestroy.com</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <button><a href="https://www.linkedin.com/in/jones-troy/"><img src="https://lh3.googleusercontent.com/3A9OOjmZxemiEwg7mhh4L2J1b5YHt38zvuVEi7VIWHkeuHLlQ-bk5HCjHIFAzoMm7_SgrlPjlo637fzTZ6CyJ6BoDv_lwc1i8DRQWDl2EpjOQM9-ZxFndHe2iaxGAD_tofzB0D9nzqGV_w09e2moD1j1gIt1VjMRhgSsAY2_DnDmBtD0xuUjyo_edwmEzUKMLC0ETVyhP2Vh5Jc-JfSnrcG9wg0yMQ_q6yo-ulS00aNcteCrtFCWr3q5BcQrsNYmwQyHktEq6RA2DjEgasQhNXv5BlhUQNngjptmamf_R4aaUMxE9IdPQphyJKvE876MUtQPkrZxv-yxVgn3bheB8VYL9weCq1ytnRGTNnBDoIyS7XUZ8NquSfI0FzQpOWJjqzn6gqdVOZnCytMOBe4LmuvH5UZ8WRrgGj5NDVl5yKplAA7FuInVthyBshMXGxD-ooESc_7luEWkeoelBJ7PTyAgDw0wquBLSv26CGLVQ8vlX32tfiHDhOsV7kECcVFzU4ZFrVCK72eFwDKQqRmd90eXcw94LZnM3GM9t1RFxyTMn79I2BO2l-QHrTR-vCGLHFbGAYPPFkDr7u7TP9xk9fhEb-eHQ7GDi_J_9wCSqcI57Ji_FnG6KjNGruQfRediy9EYPMzz6fgL3-m3su7BFvq3ui6JvoLcj63vGFVtDlcqhzUS7RxPjAwtfdKPGheNwlVO0flGUK-acazZcf_3FGtyiwJ109K7_eOC6JKhD0YA0-Vzw8TbW8e5=s40-no"></img></a>
                </button>
                <button>
                    <a href="https://github.com/sntnmjones">
                        <img src="https://lh3.googleusercontent.com/ivdHeZBRqSOZ6FCdnBiJrsjm1vTzMEfzYK4q5Kh5y5t2AdRhmTjGIMhlF71K86CFHfD2yEa7PgER8UYGPUKJfpYbOiKe91748kjld7kCFjRXpFwLVEnh7pkhc0-_I74T2e8GPMpllwtDQkkKfq_o9MYyJ7y7qhCTLeGLIQscNivK8NM8peus5NIApbnPV5-Su78j1_eeXdzt0ryNYB_ALrnb9Gq0erEojbjEceRdjWsflts--FS4nu0EDhD4Kofv603vq2HSgxaAoxJxdEkFSEkPK72YMuguCS3rERK2llP9LB5Vq95KKxcHaYK1igHbCBXH_Wfp_ald-8ptkkDTawy9uolhOT8P9WJtkbZYCGOWo4q49XPw_sEMOaQdkz_bBrFNwAPKJrVQQu6TnM-YFwCaJjjdlpwb_xDvFStLIxjQ10GOSphZJWUuTiCtPIAO6zUQnU76QDq2faa-bxMBkYfheiTzdC7mfewVkVyVRAJFoxloZ69sQXp4TGfpNXWroURoiaLTiAeyw7iBsndmB9qnkUgSiMr8rPH_mrmAIgCmKJ3PBThT1oq0TF4fRbqUCpPQuNOL2PE_YOYVyWuk6FvFjNxElHJXaTFAS3YxBVTIGAMl8owk59M9T7wSGkwnaf3kUcPJH2IKxMZVyrqDHdi55zVdZePf4YFX93E2uv99nW-81sYVBabSouzf0r_ubSCqbKcIzF0Edb02dWXzNQBM8Nf86hI6wWBCw3bycFa2KMnxZsyRFC-T=w139-h40-no"></img>
                    </a>
                </button>
            </nav>
        );
    }
}

export default Navbar;