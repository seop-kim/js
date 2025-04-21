class LifeCycle {
    call() {
        this.a();
        this.b();
        this.c();
    }

    a() {
        console.log('a() call')
    }

    b(){
        console.log('b() call')
    }

    c(){
        console.log('c() call')
    }


}


class LifeCycle2 extends LifeCycle {
    a() {
        super.a();
        console.log('a() call2')
    }
    b(){
        console.log('b() call2')
        super.b();
    }

}

new LifeCycle2().call();
