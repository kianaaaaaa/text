## 虚拟DOM和diff 算法

1. 虚拟dom
  + 将真实dom 转换为对象
2. diff 算法
diff 算法是以最小的代价来实现dom的更新

+  key 很重要,key是这个节点的唯一标识,告诉diff算法,在更改前后他们是同一个dom节点
+  只有是同一个虚拟节点,才进行精细化比较,否则就暴力删除旧的,插入新的.
	延伸问题:如何定义是同一个虚拟节点? 答:选择器相同且key相同
+  只进行同层比较,不会进行跨层比较. 即使是同一片虚拟节点,但是跨层了,对不起,精细化比较不diff你,而是暴力删除旧的,然后插入新的
