System.register(["./index-b814fbd9.js","./base.js","./index-68ccac70.js","./collision-matrix-571eda5a.js","./deprecated-37e42d8f.js","./director-56fe9b8d.js","./find-222dc7da.js","./pipeline-state-manager-8f16c5a7.js","./buffer-barrier-d1733967.js","./node-event-40319828.js","./touch-685512cb.js","./util-06cac5ac.js","./mesh-97b1b18c.js","./capsule-212e055a.js","./skeleton-99c82a69.js","./terrain-asset-b17fae4a.js","./deprecated-0752a51c.js","./builtin-pipelines-98225268.js","./deprecated-2e80a469.js","./camera-component-9188fe5a.js","./model-renderer-8b84c274.js","./renderer-7bc9d919.js","./instantiate-42c48975.js","./move-8e10dd33.js"],(function(e){"use strict";var o,n,i,t,a,r,l,s,p,d,c,C,m,y,u;return{setters:[function(C){o=C.P,n=C.C,i=C.a,t=C.B,a=C.S,r=C.b,l=C.R,s=C.c,p=C.M,d=C.d,c=C.p,e({BoxCharacterController:C.o,BoxCollider:C.B,BoxColliderComponent:C.B,CapsuleCharacterController:C.n,CapsuleCollider:C.b,CapsuleColliderComponent:C.b,CharacterController:C.e,Collider:C.C,ColliderComponent:C.C,ConeCollider:C.i,ConfigurableConstraint:C.l,ConstantForce:C.f,Constraint:C.a,CylinderCollider:C.d,CylinderColliderComponent:C.d,FixedConstraint:C.F,HingeConstraint:C.H,MeshCollider:C.M,MeshColliderComponent:C.M,PhysicMaterial:C.c,PhysicsLineStripCastResult:C.h,PhysicsMaterial:C.c,PhysicsRayResult:C.g,PhysicsSystem:C.P,PlaneCollider:C.k,PointToPointConstraint:C.m,RigidBody:C.R,RigidBodyComponent:C.R,SimplexCollider:C.j,SphereCollider:C.S,SphereColliderComponent:C.S,TerrainCollider:C.T,physics:C.p})},function(){},function(e){C=e.ag,m=e.ah,y=e.l,u=e.cq},function(o){e({EAxisDirection:o.E,EColliderType:o.b,ERigidBodyType:o.a})},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){C(o,"PhysicsSystem",[{name:"ins",newName:"instance"},{name:"PHYSICS_AMMO",newName:"PHYSICS_BULLET"}]),C(o.prototype,"PhysicsSystem.prototype",[{name:"deltaTime",newName:"fixedTimeStep"},{name:"maxSubStep",newName:"maxSubSteps"}]),m(o.prototype,"PhysicsSystem.prototype",[{name:"useFixedTime"},{name:"useCollisionMatrix"},{name:"updateCollisionMatrix"},{name:"resetCollisionMatrix"},{name:"isCollisionGroup"},{name:"setCollisionGroup"}]),C(n.prototype,"Collider.prototype",[{name:"attachedRigidbody",newName:"attachedRigidBody"},{name:"TYPE",newName:"type"}]),C(n,"Collider",[{name:"EColliderType",newName:"Type"},{name:"EAxisDirection",newName:"Axis"}]),C(i,"Constraint",[{name:"EConstraintType",newName:"Type"}]),C(t.prototype,"BoxCollider.prototype",[{name:"boxShape",newName:"shape"}]),C(a.prototype,"SphereCollider.prototype",[{name:"sphereShape",newName:"shape"}]),C(r.prototype,"CapsuleCollider.prototype",[{name:"capsuleShape",newName:"shape"}]),C(l.prototype,"RigidBody.prototype",[{name:"rigidBody",newName:"body"}]),C(l,"RigidBody",[{name:"ERigidBodyType",newName:"Type"}]),m(l.prototype,"RigidBody.prototype",[{name:"fixedRotation"}]),y.RigidBodyComponent=l,u(l,"cc.RigidBodyComponent"),y.ColliderComponent=n,u(n,"cc.ColliderComponent"),y.BoxColliderComponent=t,u(t,"cc.BoxColliderComponent"),y.SphereColliderComponent=a,u(a,"cc.SphereColliderComponent"),u(r,"cc.CapsuleColliderComponent"),u(p,"cc.MeshColliderComponent"),u(d,"cc.CylinderColliderComponent"),y.PhysicMaterial=s,u(s,"cc.PhysicMaterial"),y.physics=c}}}));
